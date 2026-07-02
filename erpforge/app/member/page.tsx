import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BackHomeLink } from "@/components/ui/back-home-link";

export const metadata: Metadata = {
  title: "Member Area | ERPForge",
  description: "Members can contribute article ideas and blog drafts for review by ERPForge admins.",
};

export default function MemberPage() {
  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Member area</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">Members contribute, admins review, the platform publishes.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            ERPForge is designed for community contribution. Members can submit thoughtful blog ideas and drafts, while admins approve or reject them before publishing them on the public blog.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BackHomeLink />
            <Button asChild className="rounded-full font-black">
              <Link href="/admin">Go to admin workspace</Link>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/10 font-black text-white">
              <Link href="/blog">Browse published blog</Link>
            </Button>
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          <Card className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                <FileText className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-black">Submit content</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">Members can share tutorials, interview notes, career insights and case studies for the ERPForge editorial team.</p>
          </Card>

          <Card className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h2 className="text-lg font-black">Admin review</h2>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-400">Admins review quality, relevance and clarity before a post is published live to the blog.</p>
          </Card>
        </div>

        <Card className="rounded-[2rem] border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-violet-300" />
            <p className="font-semibold text-slate-200">Community-first publishing</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            This creates a healthy contributor system where the platform grows through community ideas while staying trustworthy, curated and useful.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">Review before publish</span>
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">Member submissions</span>
            <span className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">Admin moderation</span>
          </div>
        </Card>
      </div>
    </main>
  );
}
