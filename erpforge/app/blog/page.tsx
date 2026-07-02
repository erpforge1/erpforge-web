import Link from "next/link";
import { getPublishedPosts } from "@/lib/admin";

export const metadata = {
  title: "Blog | ERPForge",
  description: "Insights, roadmaps, and practical guidance for SAP developers and consultants.",
};

export default async function BlogPage() {
  const posts = await getPublishedPosts();

  return (
    <main className="min-h-screen bg-[#04070d] text-slate-100">
      <section className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-24 lg:px-8">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">ERPForge Blog</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Practical SAP insights and learning roadmaps.</h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Browse articles for developers, consultants and architects who want a sharper edge in ABAP, RAP, CDS and modern SAP delivery.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm text-cyan-400">{post.category ?? "Community"}</p>
                <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-300">Published</span>
              </div>
              <h2 className="mt-3 text-2xl font-semibold">{post.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{post.excerpt ?? post.content}</p>
              <Link href={`/blog/${post.slug}`} className="mt-6 inline-flex text-sm font-medium text-cyan-400 hover:text-cyan-300">
                Read article →
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
