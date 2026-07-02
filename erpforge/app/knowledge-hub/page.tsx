import type { Metadata } from "next";
import Link from "next/link";
import { BookOpen, BrainCircuit, Compass, Cpu, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BackHomeLink } from "@/components/ui/back-home-link";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Knowledge Hub | ERPForge",
  description: "A deep knowledge hub for SAP ABAP, RAP, CDS, OData and S/4HANA learning.",
};

const pillars = [
  {
    title: "ABAP Foundations",
    description: "Internal tables, modularization, debugging, performance tuning and OO patterns.",
    icon: Cpu,
  },
  {
    title: "RAP Architecture",
    description: "Business objects, service definitions, behavior implementation and draft handling.",
    icon: BrainCircuit,
  },
  {
    title: "CDS & OData Modeling",
    description: "Associations, annotations, semantic exposure and API guidance for modern SAP apps.",
    icon: Compass,
  },
  {
    title: "Career & Delivery",
    description: "Interview prep, consulting communication, technical storytelling and delivery habits.",
    icon: Sparkles,
  },
];

export default function KnowledgeHubPage() {
  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Knowledge Hub</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">A production-style SAP learning platform for real developers.</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">
            ERPForge is building a structured knowledge base that combines interviews, tutorials, roadmaps, tools and editorial review so the platform grows into a trusted SAP resource.
          </p>
          <div className="mt-8">
            <BackHomeLink />
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <Card key={pillar.title} className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-cyan-500/15 text-cyan-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-black">{pillar.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{pillar.description}</p>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <Card className="rounded-[1.5rem] border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <BookOpen className="h-5 w-5 text-emerald-300" />
              <h2 className="text-xl font-black">Deep-dive articles</h2>
            </div>
            <div className="mt-4 space-y-3">
              {articles.slice(0, 6).map((article) => (
                <Link key={article.slug} href={`/knowledge-base/${article.slug}`} className="block rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300 hover:text-white">
                  {article.title}
                </Link>
              ))}
            </div>
          </Card>

          <Card className="rounded-[1.5rem] border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-violet-300" />
              <h2 className="text-xl font-black">What this hub covers</h2>
            </div>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
              <li>• Interview-focused SAP explanations that help learners prepare with confidence.</li>
              <li>• Practical architecture notes for RAP, CDS and OData implementations.</li>
              <li>• Career and consultant growth resources for real-world progression.</li>
              <li>• Editorially reviewed content from members and the ERPForge team.</li>
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
