import Link from "next/link";
import { notFound } from "next/navigation";
import { getArticleBySlug, articles } from "@/data/articles";

export async function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function KnowledgeBasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#04070d] text-slate-100">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-24 lg:px-8">
        <Link href="/tutorials" className="text-sm text-cyan-400 hover:text-cyan-300">
          ← Back to tutorials
        </Link>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Knowledge Base</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{article.title}</h1>
          <p className="mt-4 text-sm text-slate-400">By {article.author} · {article.publishedDate}</p>
          <p className="mt-6 text-lg leading-8 text-slate-300">{article.content}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-white/10 bg-slate-950/70 px-3 py-1 text-sm text-slate-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
