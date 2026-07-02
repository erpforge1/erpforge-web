import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeCheck, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About ERPForge",
  description:
    "Learn about ERPForge, the SAP developer hub built by Srivatsa Palani to help SAP professionals prepare better and learn faster.",
};

export default function AboutPage() {
  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 px-5 py-16 md:px-8 lg:px-10">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 backdrop-blur-xl">
          <Sparkles className="h-4 w-4 text-blue-300" />
          About ERPForge
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
            <h1 className="text-4xl font-black tracking-tight md:text-5xl">
              Built by a SAP Technical Consultant to help other SAP professionals.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-300">
              Hi, I am Srivatsa Palani, a SAP Technical Consultant. I am creating ERPForge to help SAP developers, consultants and learners prepare for interviews, understand modern SAP development and solve real-world technical problems faster.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button asChild className="rounded-full font-black">
                <Link href="/interview-hub">
                  Start interview prep
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/10 font-black text-white hover:bg-white/15">
                <Link href="/contact">Contact the founder</Link>
              </Button>
            </div>
          </section>

          <Card className="rounded-[2rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <h2 className="text-xl font-black">What ERPForge stands for</h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <li className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 text-emerald-300" /> Practical SAP interview preparation for real-world roles.</li>
              <li className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 text-emerald-300" /> Clear guides for ABAP, RAP, CDS Views, OData and S/4HANA.</li>
              <li className="flex gap-3"><BadgeCheck className="mt-1 h-5 w-5 text-emerald-300" /> Premium, searchable learning resources built for long-term growth.</li>
            </ul>
          </Card>
        </div>
      </div>
    </main>
  );
}
