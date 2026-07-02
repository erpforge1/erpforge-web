import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail, UserRound } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Contact ERPForge",
  description:
    "Get in touch with ERPForge for questions, collaborations, or SAP learning resources.",
};

export default function ContactPage() {
  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Contact ERPForge</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Reach out for learning resources, updates or collaboration ideas.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ERPForge is created and maintained by Srivatsa Palani, a SAP Technical Consultant, who is building this platform to help SAP professionals grow faster.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild className="rounded-full font-black">
              <a href="mailto:erpforge.1@gmail.com">
                <Mail className="mr-2 h-4 w-4" />
                erpforge.1@gmail.com
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full border-white/15 bg-white/10 font-black text-white hover:bg-white/15">
              <Link href="/about">
                Learn about the founder
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>

        <Card className="rounded-[2rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500">
              <UserRound className="h-5 w-5" />
            </div>
            <div>
              <h2 className="text-xl font-black">Owner</h2>
              <p className="text-sm text-slate-400">Srivatsa Palani, SAP Technical Consultant</p>
            </div>
          </div>
          <p className="mt-5 text-sm leading-7 text-slate-300">
            The site is being shaped as a long-term SAP learning business with interviews, tools, tutorials and career resources for modern SAP professionals.
          </p>
        </Card>
      </div>
    </main>
  );
}
