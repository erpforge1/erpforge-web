import { promises as fs } from "fs";
import path from "path";
import type { Metadata } from "next";
import Link from "next/link";
import { Languages, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BackHomeLink } from "@/components/ui/back-home-link";

export const metadata: Metadata = {
  title: "Tamil SAP Hub",
  description:
    "Tamil-friendly SAP explanations, interview preparation and career guidance for learners who want simple, practical explanations.",
};

const topics = [
  "Tamil-friendly SAP explanations",
  "Interview preparation",
  "Career guidance",
  "Simple practical learning",
];

export default async function TamilPage() {
  const raw = await fs.readFile(path.join(process.cwd(), "data", "tamil", "youtube.json"), "utf8");
  const youtube = JSON.parse(raw) as { channelUrl: string; videoUrl: string };

  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Tamil Hub</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Learn SAP in Tamil with simple, practical guidance.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ERPForge is preparing a Tamil-friendly learning experience for SAP learners who want approachable explanations and career-focused guidance.
          </p>
          <div className="mt-8">
            <BackHomeLink />
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => (
            <Card key={topic} className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                  {topic.includes("Career") ? <Sparkles className="h-5 w-5" /> : <Languages className="h-5 w-5" />}
                </div>
                <h2 className="text-lg font-black">{topic}</h2>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                A growing collection of content built to make SAP learning more accessible and practical for Tamil-speaking learners.
              </p>
            </Card>
          ))}
        </div>

        <Card className="rounded-[1.5rem] border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
          <h2 className="text-xl font-black">Tamil community links</h2>
          <p className="mt-3 text-sm leading-7 text-slate-400">These links can be updated later from the admin workspace.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href={youtube.channelUrl} target="_blank" className="rounded-full bg-cyan-500 px-4 py-2 text-sm font-semibold text-slate-950">Visit channel</Link>
            <Link href={youtube.videoUrl} target="_blank" className="rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-slate-100">Watch featured video</Link>
          </div>
        </Card>
      </div>
    </main>
  );
}
