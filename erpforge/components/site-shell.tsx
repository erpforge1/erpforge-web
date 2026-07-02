"use client";

import type { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Interviews", href: "/interview-hub" },
  { label: "Knowledge Hub", href: "/knowledge-hub" },
  { label: "Tools", href: "/tools" },
  { label: "Blog", href: "/blog" },
  { label: "Career", href: "/career" },
  { label: "Tamil Hub", href: "/tamil" },
  { label: "Member", href: "/member" },
  { label: "Admin", href: "/admin" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === href;
  return pathname.startsWith(href);
}

export function SiteShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#050816]/80 backdrop-blur-2xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 md:px-8 lg:px-10">
          <Link href="/" className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 font-black shadow-lg shadow-blue-500/25">
              E
            </div>
            <span className="text-xl font-black tracking-tight">ERPForge</span>
          </Link>

          <nav className="hidden items-center gap-2 md:flex">
            {navItems.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`rounded-full px-3 py-2 text-sm font-medium transition ${
                    active ? "bg-white/15 text-white" : "text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <Link href="/tools" className="hidden rounded-full border border-cyan-400/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-200 transition hover:bg-cyan-500/20 md:inline-flex">
            Open tools
          </Link>
        </div>
      </header>

      <div className="relative">{children}</div>

      <footer className="border-t border-white/10 bg-[#030712]/80">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 md:grid-cols-3 md:px-8 lg:px-10">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">ERPForge</p>
            <p className="mt-4 max-w-sm text-sm leading-7 text-slate-400">
              A premium SAP developer hub for interviews, tutorials, career growth and developer tools.
            </p>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-300">Explore</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <Link href="/interview-hub" className="transition hover:text-white">Interview hub</Link>
              <Link href="/knowledge-hub" className="transition hover:text-white">Knowledge hub</Link>
              <Link href="/career" className="transition hover:text-white">Career hub</Link>
            </div>
          </div>

          <div>
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Practical resources</p>
            <div className="mt-4 flex flex-col gap-2 text-sm text-slate-400">
              <Link href="/tools" className="transition hover:text-white">Developer tools</Link>
              <Link href="/blog" className="transition hover:text-white">Blog</Link>
              <Link href="/member" className="transition hover:text-white">Member area</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
