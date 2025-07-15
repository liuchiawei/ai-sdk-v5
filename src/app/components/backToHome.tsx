import Link from "next/link";

export default function BackToHome() {
  return (
    <Link href="/" className="fixed bottom-4 left-4 p-3 border rounded-lg hover:bg-gray-500/40">
      Home
    </Link>
  );
}