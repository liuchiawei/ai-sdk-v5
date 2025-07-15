import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-5xl font-bold">AI SDK 5</h1>
        <h2 className="text-xl">
          Sandbox for Vercel AI SDK 5.
        </h2>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-2 w-full max-w-2xl">
        <Link href="/chat" className="p-2 border rounded-lg hover:bg-gray-500/40">
          Chat
        </Link>
      </div>
    </div>
  );
}