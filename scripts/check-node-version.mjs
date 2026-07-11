import { readFile } from 'node:fs/promises'

const versionFile = new URL('../.nvmrc', import.meta.url)
const pinnedVersion = (await readFile(versionFile, 'utf8'))
  .trim()
  .replace(/^v/, '')
const currentVersion = process.versions.node

if (!/^\d+\.\d+\.\d+$/.test(pinnedVersion)) {
  console.error(
    'Invalid Node.js version in .nvmrc. Use an exact major.minor.patch version.',
  )
  process.exit(1)
}

if (currentVersion !== pinnedVersion) {
  console.error(
    [
      `Unsupported Node.js runtime: v${currentVersion}.`,
      `Mine Seek requires v${pinnedVersion} as pinned in .nvmrc.`,
      'Run "nvm install" followed by "nvm use", then retry.',
    ].join('\n'),
  )
  process.exit(1)
}

console.log(`Node.js runtime verified: v${currentVersion}`)
