import assert from 'node:assert/strict'
import { execFile } from 'node:child_process'
import { readFile } from 'node:fs/promises'
import { dirname, resolve } from 'node:path'
import test from 'node:test'
import { fileURLToPath } from 'node:url'
import { promisify } from 'node:util'

const repositoryRoot = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const supportedNodeVersion = '22.23.4'
const execFileAsync = promisify(execFile)

async function readRepositoryFile(relativePath) {
  return readFile(resolve(repositoryRoot, relativePath), 'utf8')
}

async function readRepositoryJson(relativePath) {
  return JSON.parse(await readRepositoryFile(relativePath))
}

const [nvmrc, npmrc, packageJson, packageLock, deployWorkflow, readme] =
  await Promise.all([
    readRepositoryFile('.nvmrc'),
    readRepositoryFile('.npmrc'),
    readRepositoryJson('package.json'),
    readRepositoryJson('package-lock.json'),
    readRepositoryFile('.github/workflows/deploy.yml'),
    readRepositoryFile('README.md'),
  ])

test('.nvmrc pins the supported Node.js version', () => {
  assert.equal(nvmrc.trim(), `v${supportedNodeVersion}`)
})

test('package metadata requires the supported Node.js version', () => {
  assert.equal(
    packageJson.engines?.node,
    supportedNodeVersion,
    'package.json engines.node must match .nvmrc',
  )
})

test('lockfile root metadata requires the supported Node.js version', () => {
  assert.equal(
    packageLock.packages?.['']?.engines?.node,
    supportedNodeVersion,
    'package-lock.json root engines.node must match .nvmrc',
  )
})

test('npm rejects dependency installation under unsupported Node.js versions', () => {
  assert.match(
    npmrc,
    /^engine-strict=true$/m,
    '.npmrc must enforce the package.json Node.js engine',
  )
})

test('development and verification commands run the dependency-free preflight', () => {
  const runtimeCheck = 'node scripts/check-node-version.mjs'

  assert.equal(packageJson.scripts?.['check:node'], runtimeCheck)
  for (const command of [
    'dev',
    'build',
    'start',
    'lint',
    'typecheck',
    'test',
  ]) {
    assert.equal(
      packageJson.scripts?.[`pre${command}`],
      'npm run check:node',
      `${command} must run the Node.js runtime preflight`,
    )
  }
})

test('runtime preflight accepts the supported Node.js version', async () => {
  const { stdout, stderr } = await execFileAsync(
    process.execPath,
    [resolve(repositoryRoot, 'scripts/check-node-version.mjs')],
    { cwd: repositoryRoot },
  )

  assert.equal(stderr, '')
  assert.match(stdout, new RegExp(`v${supportedNodeVersion}`))
})

test('deployment reads the Node.js version from .nvmrc', () => {
  assert.match(
    deployWorkflow,
    /node-version-file:\s*['"]?\.nvmrc['"]?/,
    'setup-node must use node-version-file with .nvmrc',
  )
  assert.doesNotMatch(
    deployWorkflow,
    /\bnode-version\s*:/,
    'the workflow must not duplicate the Node.js version',
  )
  assert.match(
    deployWorkflow,
    /run:\s*npm test/,
    'the deployment workflow must run the runtime contract tests',
  )
})

test('README Node.js runtime references match the supported version', () => {
  const nodeRuntimeLines = readme
    .split('\n')
    .filter((line) => /node(?:\.js)?|\.nvmrc|required version/i.test(line))
  const documentedVersions = [
    ...new Set(
      nodeRuntimeLines.flatMap((line) =>
        [...line.matchAll(/\bv?(\d+\.\d+\.\d+)\b/g)].map((match) => match[1]),
      ),
    ),
  ].sort()

  assert.deepEqual(
    documentedVersions,
    [supportedNodeVersion],
    'README Node.js versions must match .nvmrc without stale alternatives',
  )
})
