import type { Metadata } from "next";
import { Briefcase, Compass, TrendingUp, GraduationCap, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BackHomeLink } from "@/components/ui/back-home-link";

export const metadata: Metadata = {
  title: "SAP Career Hub",
  description:
    "Explore SAP career resources including roadmaps, certification guidance, salary insights and practical career growth tips.",
};

const growthPath = [
  "ABAP Developer",
  "Consultant",
  "Senior Consultant",
  "Technical Architect",
  "Enterprise Architect",
];

const items = [
  {
    title: "Roadmaps for SAP technical consultants",
    description: "A structured path from ABAP fundamentals to advanced RAP, CDS and S/4HANA delivery work.",
    icon: Briefcase,
  },
  {
    title: "Certification guidance",
    description: "Advice for choosing certifications and building credibility around real delivery experience.",
    icon: GraduationCap,
  },
  {
    title: "Salary insights",
    description: "A practical look at how SAP skills, industry focus and consulting depth influence earning potential.",
    icon: TrendingUp,
  },
  {
    title: "Practical career resources",
    description: "Career playbooks for interviews, portfolio-building, communication and technical storytelling.",
    icon: Sparkles,
  },
];

export default function CareerPage() {
  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-amber-300">Career Hub</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Guidance for SAP technical consultants who want to grow with confidence.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ERPForge will support career growth through roadmaps, practical learning paths and focused advice for developers, consultants and architects.
          </p>
          <div className="mt-8">
            <BackHomeLink />
          </div>
          <div className="mt-6 flex flex-wrap gap-2">
            {growthPath.map((step) => (
              <span key={step} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-xs text-slate-300">{step}</span>
            ))}
          </div>
        </section>

        <div className="grid gap-5 md:grid-cols-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Card key={item.title} className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
                <div className="flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-2xl bg-amber-500/15 text-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-lg font-black">{item.title}</h2>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-400">{item.description}</p>
              </Card>
            );
          })}
        </div>

        <Card className="rounded-[2rem] border-white/10 bg-[#070b17]/80 p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <Compass className="h-5 w-5 text-cyan-300" />
            <p className="font-semibold text-slate-200">Roadmap direction</p>
          </div>
          <p className="mt-3 text-sm leading-7 text-slate-400">
            Future content will cover ABAP core concepts, debugging mastery, performance tuning, CDS + OData, RAP and senior consultant growth.
          </p>
        </Card>
      </div>
    </main>
  );
}
