import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, Cpu, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BackHomeLink } from "@/components/ui/back-home-link";
import { filterInterviewQuestions } from "@/data/interviews";

const routes = {
  "abap-interview-questions": {
    title: "ABAP Interview Questions",
    description: "Core ABAP questions for developers preparing for technical interviews and hands-on delivery work.",
    category: "ABAP",
    focusAreas: ["Internal tables", "OO ABAP", "Performance tuning"],
  },
  "rap-interview-questions": {
    title: "RAP Interview Questions",
    description: "Modern RAP questions for developers building transactional apps on SAP S/4HANA.",
    category: "RAP",
    focusAreas: ["Behavior definitions", "Draft handling", "Service exposure"],
  },
  "cds-view-interview-questions": {
    title: "CDS View Interview Questions",
    description: "Questions covering CDS modeling, semantics, associations and practical implementation patterns.",
    category: "CDS Views",
    focusAreas: ["Annotations", "Associations", "Consumption views"],
  },
  "odata-interview-questions": {
    title: "OData Interview Questions",
    description: "Practical OData questions focused on service design, pagination and consumption patterns.",
    category: "OData",
    focusAreas: ["Pagination", "Filtering", "Expand operations"],
  },
  "s4hana-technical-interview-questions": {
    title: "S/4HANA Technical Interview Questions",
    description: "Scenario-based questions for architects and developers working in modern SAP delivery.",
    category: "S4HANA",
    focusAreas: ["Extensibility", "Clean architecture", "Modern delivery"],
  },
};

export async function generateStaticParams() {
  return Object.keys(routes).map((slug) => ({ slug }));
}

export default async function InterviewTopicPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const route = routes[slug as keyof typeof routes];

  if (!route) {
    notFound();
  }

  const questions = filterInterviewQuestions({ category: route.category }).slice(0, 12);

  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-blue-300">Interview Hub</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">{route.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-300">{route.description}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <BackHomeLink />
            <Link href="/interview-hub" className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-300">
              Browse all interview topics
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {route.focusAreas.map((focusArea) => (
              <span key={focusArea} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">{focusArea}</span>
            ))}
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {questions.map((question, index) => (
            <Card key={question.id} className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-2xl bg-blue-500/15 text-blue-300">
                  {index % 2 === 0 ? <Cpu className="h-5 w-5" /> : <BookOpen className="h-5 w-5" />}
                </div>
                <div>
                  <h2 className="text-lg font-black">{question.question}</h2>
                  <p className="mt-1 text-xs uppercase tracking-[0.2em] text-slate-500">{question.difficulty}</p>
                </div>
              </div>
              <p className="mt-4 text-sm leading-7 text-slate-400">{question.answer}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {question.relatedTopics.slice(0, 3).map((topic) => (
                  <span key={topic} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">{topic}</span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="rounded-[2rem] border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-cyan-300" />
            <p className="font-semibold text-slate-200">Growth note</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            This section is designed to grow into a full interview library with scenario answers, interviewer expectations and practical examples for each topic.
          </p>
        </Card>
      </div>
    </main>
  );
}
