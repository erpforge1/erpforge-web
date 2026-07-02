import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export function BackHomeLink({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-2 text-sm font-semibold text-cyan-300 transition hover:text-cyan-200 ${className}`}>
      <ArrowLeft className="h-4 w-4" />
      Back to home
    </Link>
  );
}
