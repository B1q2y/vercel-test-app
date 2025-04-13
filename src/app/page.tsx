// src/app/page.tsx
export default function Home() {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME;

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-4">Hello from {siteName}!</h1>
      <p className="text-gray-600">This value is loaded from .env.local</p>
    </main>
  );
}
