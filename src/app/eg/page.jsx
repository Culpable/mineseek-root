export const metadata = {
  title: 'Redirecting to Extractor Grid - Mine Seek',
};

export default function EgRedirectPage() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: 'window.location.replace("/extractor-grid/");',
        }}
      />
      <main className="min-h-screen grid place-items-center px-6 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-base font-semibold text-gray-600">Redirecting…</h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            If you're not redirected automatically, please{" "}
            <a href="/extractor-grid/" className="font-semibold text-blue-600 underline">
              click here
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
