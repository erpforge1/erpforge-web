import Link from "next/link";
import type { Metadata } from "next";
import { BookOpen, Cpu, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { articles } from "@/data/articles";

export const metadata: Metadata = {
  title: "SAP Tutorials",
  description:
    "Explore ERPForge tutorials covering RAP basics, CDS Views, ABAP performance tuning, OData and modern S/4HANA development.",
};

export default function TutorialsPage() {
  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Tutorials</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Clear tutorials for modern SAP development and technical problem-solving.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ERPForge publishes practical tutorials that explain SAP concepts in simple language and connect them to real-world development work.
          </p>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {articles.slice(0, 8).map((article) => (
            <Link key={article.slug} href={`/knowledge-base/${article.slug}`}>
              <Card className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:-translate-y-1">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-emerald-500/15 text-emerald-300">
                    {article.category.includes("CDS") || article.category.includes("RAP") ? <Cpu className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                  </div>
                  <h2 className="text-lg font-black">{article.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{article.excerpt}</p>
              </Card>
            </Link>
          ))}
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          <div className="rounded-[2rem] border border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Knowledge hub</p>
            <h2 className="mt-3 text-2xl font-black">Expanded SAP topics for long-term growth</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
              <li>• ABAP performance and memory-conscious coding</li>
              <li>• RAP business object design and service behavior</li>
              <li>• CDS view modeling and semantic annotations</li>
              <li>• OData contract design and API consumption patterns</li>
            </ul>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
            <p className="text-sm font-black uppercase tracking-[0.2em] text-emerald-300">Learning pods</p>
            <h2 className="mt-3 text-2xl font-black">Build depth with focused study tracks</h2>
            <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-400">
              <li>• Interview prep sprint for ABAP and RAP</li>
              <li>• Architecture study path for consultants and architects</li>
              <li>• Tooling and productivity stack for daily SAP work</li>
              <li>• Community-driven case studies and tutorials</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <p className="font-semibold text-slate-200">Content roadmap</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            The first content cluster covers ABAP fundamentals, RAP basics and interview-ready CDS explanations to build early authority.
          </p>
        </div>
      </div>
    </main>
  );
}
