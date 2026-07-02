import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Briefcase, Cpu, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BackHomeLink } from "@/components/ui/back-home-link";

export const metadata: Metadata = {
  title: "SAP Interview Hub",
  description:
    "Explore SAP interview preparation resources covering ABAP, RAP, CDS, OData and S/4HANA topics.",
};

const topics = [
  {
    slug: "abap-interview-questions",
    title: "ABAP Interview Questions",
    description: "Core questions on internal tables, modularization, performance, OO ABAP and debugging strategy.",
    tags: ["Internal Tables", "OO ABAP", "Debugging"],
    icon: Cpu,
  },
  {
    slug: "rap-interview-questions",
    title: "RAP Interview Questions",
    description: "Modern questions on behavior definitions, service exposure, draft handling and transactional logic.",
    tags: ["Behavior", "Draft", "Service Exposure"],
    icon: Sparkles,
  },
  {
    slug: "cds-view-interview-questions",
    title: "CDS View Interview Questions",
    description: "High-signal questions covering annotations, associations, consumption views and semantic modeling.",
    tags: ["Annotations", "Associations", "Consumption"],
    icon: BookOpen,
  },
  {
    slug: "odata-interview-questions",
    title: "OData Interview Questions",
    description: "Practical OData questions around paging, filtering, expand operations and service optimization.",
    tags: ["Paging", "Filtering", "Expand"],
    icon: Briefcase,
  },
  {
    slug: "s4hana-technical-interview-questions",
    title: "S/4HANA Technical Interview Questions",
    description: "Scenario-led questions on extensibility, clean architecture and modern delivery in S/4HANA.",
    tags: ["Extensibility", "Architecture", "Modernization"],
    icon: Sparkles,
  },
];

export default function InterviewHubPage() {
  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">Interview Hub</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Prepare for SAP interviews with practical, high-signal topics.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ERPForge will grow into a structured SAP interview resource center covering technical concepts, scenario questions and practical answers for developers and consultants.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BackHomeLink />
            <Button asChild className="rounded-full font-black">
              <Link href="/knowledge-hub">
                Explore related knowledge
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {topics.map((topic) => {
            const Icon = topic.icon;
            return (
              <Link key={topic.slug} href={`/interview-hub/${topic.slug}`} className="block">
                <Card className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl transition hover:border-cyan-400/30 hover:bg-white/[0.08]">
                  <div className="flex items-center gap-3">
                    <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500/15 text-blue-300">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h2 className="text-lg font-black">{topic.title}</h2>
                  </div>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{topic.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {topic.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">{tag}</span>
                    ))}
                  </div>
                  <div className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
                    Explore this topic
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        <Card className="rounded-[2rem] border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <p className="font-semibold text-slate-200">Interview prep pack</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            The hub will feature scenario-based answers, interviewer expectations, practical examples and topic-by-topic study plans so learners can practice like real candidates.
          </p>
        </Card>
      </div>
    </main>
  );
}
