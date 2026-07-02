"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Briefcase,
  Code2,
  Compass,
  GraduationCap,
  Languages,
  Mail,
  Sparkles,
  TerminalSquare,
  Wrench,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { globalSearch } from "@/lib/search";

const categories = [
  {
    title: "SAP Interview Hub",
    description:
      "ABAP, RAP, CDS, OData and S/4HANA interview preparation with practical, scenario-based answers.",
    icon: GraduationCap,
    href: "/interview-hub",
    tags: ["ABAP", "RAP", "CDS", "OData"],
  },
  {
    title: "Developer Tools",
    description:
      "Useful browser-based tools for SAP and enterprise developers: JSON formatter, UUID generator, Base64 and timestamp tools.",
    icon: Wrench,
    href: "/tools",
    tags: ["JSON", "UUID", "Base64"],
  },
  {
    title: "Knowledge Base",
    description:
      "Clear technical guides for RAP, CDS Views, ABAP performance, OData and modern S/4HANA development.",
    icon: BookOpen,
    href: "/knowledge-hub",
    tags: ["RAP", "CDS", "Performance"],
  },
  {
    title: "Career Hub",
    description:
      "Roadmaps, salary guides, certifications and career advice for SAP technical consultants.",
    icon: Briefcase,
    href: "/career",
    tags: ["Roadmap", "Salary", "Growth"],
  },
  {
    title: "Tamil SAP Hub",
    description:
      "Tamil-friendly SAP learning content for developers who want simple and practical explanations.",
    icon: Languages,
    href: "/tamil",
    tags: ["Tamil", "ABAP", "Career"],
  },
];

const resources = [
  {
    title: "Top SAP ABAP Interview Questions",
    label: "Interview",
    href: "/interview-hub/abap-interview-questions",
  },
  {
    title: "SAP RAP Interview Questions",
    label: "Modern ABAP",
    href: "/interview-hub/rap-interview-questions",
  },
  {
    title: "CDS View Interview Questions",
    label: "S/4HANA",
    href: "/interview-hub/cds-view-interview-questions",
  },
  {
    title: "SAP Developer Roadmap",
    label: "Career",
    href: "/career/roadmap",
  },
];

const developerTools = [
  "UUID Generator",
  "JSON Formatter",
  "Base64 Encoder",
  "Timestamp Converter",
];

const roadmap = [
  "ABAP Developer",
  "Consultant",
  "Senior Consultant",
  "Technical Architect",
  "Enterprise Architect",
];

function AnimatedCard({
  children,
  href,
  className = "",
}: {
  children: React.ReactNode;
  href?: string;
  className?: string;
}) {
  const body = (
    <motion.div
      whileHover={{ y: -8, scale: 1.015 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Card className={`group relative overflow-hidden rounded-3xl border-white/10 bg-white/[0.055] p-6 shadow-2xl shadow-black/20 backdrop-blur-xl ${className}`}>
        <div className="absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
          <div className="absolute -inset-16 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.22),transparent_45%)]" />
        </div>
        <div className="relative z-10">{children}</div>
      </Card>
    </motion.div>
  );

  if (!href) return body;

  return (
    <Link href={href} className="block">
      {body}
    </Link>
  );
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [newsletterMessage, setNewsletterMessage] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState<Array<{ type: string; title: string; href: string }>>([]);

  async function handleSubscribe(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/newsletter", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await response.json();
    setNewsletterMessage(data.message);
    setEmail("");
  }

  function handleSearch(event: React.FormEvent) {
    event.preventDefault();
    setSearchResults(globalSearch(search));
  }

  return (
    <main className="noise-bg relative min-h-screen overflow-hidden">
      <div className="orb orb-one" />
      <div className="orb orb-two" />
      <div className="orb orb-three" />

      <section className="relative z-10 mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.08fr_0.92fr] md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-slate-200 shadow-2xl shadow-blue-500/10 backdrop-blur-xl">
            <Sparkles className="h-4 w-4 text-blue-300" />
            Premium SAP Developer Hub
          </div>

          <h1 className="max-w-5xl text-5xl font-black leading-[0.92] tracking-[-0.075em] md:text-7xl lg:text-8xl">
            <span className="gradient-text">Build Better SAP Solutions Faster.</span>
          </h1>

          <p className="mt-7 max-w-3xl text-lg leading-8 text-slate-300 md:text-xl">
            ERPForge is a modern SAP learning and productivity platform for ABAP,
            RAP, CDS Views, OData and S/4HANA professionals — built by{" "}
            <span className="font-semibold text-white">Srivatsa Palani</span>, SAP
            Technical Consultant, to help others grow faster.
          </p>

          <div className="mt-9 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-full font-black">
              <Link href="/interview-hub">
                Start Interview Prep
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full border-white/15 bg-white/10 font-black text-white hover:bg-white/15"
            >
              <Link href="/tools">Explore Tools</Link>
            </Button>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {[
              ["100+", "ABAP Questions"],
              ["4", "Free Tools"],
              ["5", "Growth Hubs"],
            ].map(([value, label]) => (
              <div
                key={label}
                className="rounded-3xl border border-white/10 bg-white/[0.06] p-4 backdrop-blur-xl"
              >
                <div className="text-2xl font-black">{value}</div>
                <div className="text-sm font-medium text-slate-400">{label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="glass relative rounded-[2rem] p-4"
        >
          <div className="overflow-hidden rounded-3xl border border-white/10 bg-[#070b17]">
            <div className="flex gap-2 border-b border-white/10 p-4">
              <span className="h-3 w-3 rounded-full bg-rose-400" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-emerald-400" />
            </div>

            <pre className="overflow-hidden whitespace-pre-wrap p-6 text-sm leading-7 text-violet-200">
{`DATA: lt_growth TYPE TABLE OF zcareer_growth.

SELECT skill, confidence, salary_impact
  FROM erpforge_learning_path
  INTO TABLE @lt_growth
  WHERE role = 'SAP Developer'.

" Learn. Practise. Interview. Grow."`}
            </pre>
          </div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute bottom-8 right-8 max-w-xs rounded-3xl border border-white/10 bg-slate-950/80 p-5 shadow-2xl backdrop-blur-xl"
          >
            <div className="mb-3 flex items-center gap-2">
              <TerminalSquare className="h-5 w-5 text-cyan-300" />
              <h3 className="font-black">Today&apos;s focus</h3>
            </div>
            <p className="text-sm leading-6 text-slate-300">
              Master RAP, CDS and performance topics that appear in real SAP
              technical interviews.
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="mb-8">
          <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-blue-300">
            Categories
          </p>
          <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
            Built like a product, not a random blog.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-400">
            Each category is designed to become a searchable content cluster that
            can grow into hundreds of helpful SAP resources.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
              >
                <AnimatedCard href={category.href}>
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-white/10">
                    <Icon className="h-6 w-6 text-blue-300" />
                  </div>
                  <h3 className="text-xl font-black">{category.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {category.description}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {category.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="rounded-full bg-white/10 text-slate-300"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </AnimatedCard>
              </motion.div>
            );
          })}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
          Popular resources
        </p>
        <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          Start with high-intent SAP topics.
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {resources.map((resource, index) => (
            <motion.div
              key={resource.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.06 }}
            >
              <AnimatedCard href={resource.href}>
                <Compass className="mb-8 h-7 w-7 text-violet-300" />
                <h3 className="text-lg font-black">{resource.title}</h3>
                <Badge className="mt-4 rounded-full">{resource.label}</Badge>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-violet-300">
          Developer tools
        </p>
        <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          Free utilities for everyday work.
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {developerTools.map((tool) => (
            <AnimatedCard key={tool} href="/tools">
              <Code2 className="mb-5 h-7 w-7 text-blue-300" />
              <h3 className="text-lg font-black">{tool}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-400">
                Lightweight browser-based tool planned for ERPForge.
              </p>
            </AnimatedCard>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-emerald-300">
          Career path
        </p>
        <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
          From ABAP developer to enterprise architect.
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3 lg:grid-cols-6">
          {roadmap.map((step, index) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.04 }}
            >
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 text-center backdrop-blur-xl">
                <div className="mb-3 text-sm font-black text-emerald-300">0{index + 1}</div>
                <h3 className="font-semibold">{step}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-cyan-300">
                Tamil hub
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Learn SAP in Tamil.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                ERPForge will include Tamil-friendly explanations for SAP learners who want practical, simple and career-focused guidance.
              </p>
            </div>
            <Button asChild className="rounded-full font-black">
              <Link href="/tamil">Visit Tamil Hub</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-16">
        <div className="rounded-[2rem] border border-white/10 bg-[#070b17]/80 p-8 shadow-2xl shadow-blue-500/10 backdrop-blur-xl md:p-10">
          <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
            <div className="max-w-2xl">
              <p className="mb-3 text-sm font-black uppercase tracking-[0.2em] text-violet-300">
                Newsletter
              </p>
              <h2 className="text-4xl font-black tracking-tight md:text-5xl">
                Get sharper every week.
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-300">
                Subscribe for practical SAP insights, interview prep tips and curated learning updates from ERPForge.
              </p>

              <form onSubmit={handleSubscribe} className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                  placeholder="you@example.com"
                  className="h-12 rounded-full border-white/10 bg-white/10 text-white placeholder:text-slate-400"
                />
                <Button type="submit" className="h-12 rounded-full px-6 font-black">
                  Subscribe
                </Button>
              </form>
              {newsletterMessage ? <p className="mt-3 text-sm text-slate-300">{newsletterMessage}</p> : null}
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.05] p-6">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-cyan-300">Quick search</p>
              <form onSubmit={handleSearch} className="mt-4 flex flex-col gap-3">
                <Input
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search articles, questions and tools"
                  className="h-12 rounded-full border-white/10 bg-white/10 text-white placeholder:text-slate-400"
                />
                <Button type="submit" variant="outline" className="h-12 rounded-full border-white/10 bg-transparent font-black text-white">
                  Search
                </Button>
              </form>

              <div className="mt-5 space-y-2">
                {searchResults.length > 0 ? (
                  searchResults.map((result) => (
                    <Link key={`${result.type}-${result.title}`} href={result.href} className="block rounded-2xl border border-white/10 bg-slate-950/60 px-4 py-3 text-sm text-slate-300 hover:text-white">
                      <span className="mb-1 block text-[10px] uppercase tracking-[0.25em] text-cyan-400">{result.type}</span>
                      {result.title}
                    </Link>
                  ))
                ) : (
                  <p className="text-sm text-slate-400">Search across interviews, articles and developer tools.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative z-10 mx-auto max-w-7xl px-5 py-8">
        <div className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-xl">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-300">Content studio</p>
              <h2 className="mt-3 text-3xl font-black tracking-tight">Members can submit articles and admins review them before publishing.</h2>
              <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-300">Use the admin workspace to approve or reject blog submissions, keep quality high and build a trusted SAP knowledge base.</p>
            </div>
            <Button asChild className="rounded-full font-black">
              <Link href="/admin">Open admin workspace</Link>
            </Button>
          </div>
        </div>
      </section>

      <footer className="relative z-10 border-t border-white/10 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr]">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 font-black">
                E
              </div>
              <span className="text-xl font-black tracking-tight">ERPForge</span>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Created by Srivatsa Palani, SAP Technical Consultant, to help SAP professionals learn faster, prepare better and solve real-world technical problems.
            </p>
            <a
              href="mailto:erpforge.1@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-blue-300"
            >
              <Mail className="h-4 w-4" />
              erpforge.1@gmail.com
            </a>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200">
              Hub
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/interview-hub" className="transition hover:text-white">Interview Hub</Link></li>
              <li><Link href="/tutorials" className="transition hover:text-white">Tutorials</Link></li>
              <li><Link href="/career" className="transition hover:text-white">Career</Link></li>
              <li><Link href="/tamil" className="transition hover:text-white">Tamil Hub</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200">
              Tools
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/tools" className="transition hover:text-white">UUID Generator</Link></li>
              <li><Link href="/tools" className="transition hover:text-white">JSON Formatter</Link></li>
              <li><Link href="/tools" className="transition hover:text-white">Base64 Encoder</Link></li>
              <li><Link href="/tools" className="transition hover:text-white">Timestamp Converter</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-black uppercase tracking-[0.2em] text-slate-200">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/about" className="transition hover:text-white">About</Link></li>
              <li><Link href="/contact" className="transition hover:text-white">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm leading-7 text-slate-500">
          © 2026 ERPForge. Independent SAP learning resource. SAP and related product names are trademarks of SAP SE.
        </div>
      </footer>
    </main>
  );
}
