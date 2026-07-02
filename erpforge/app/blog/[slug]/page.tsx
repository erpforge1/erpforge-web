import Link from "next/link";
import { notFound } from "next/navigation";
import { getPosts } from "@/lib/admin";

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const posts = await getPosts();
  const post = posts.find((entry) => entry.slug === slug && entry.status === "PUBLISHED");

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#04070d] text-slate-100">
      <section className="mx-auto flex max-w-4xl flex-col gap-8 px-6 py-24 lg:px-8">
        <Link href="/blog" className="text-sm text-cyan-400 hover:text-cyan-300">
          ← Back to blog
        </Link>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">ERPForge Blog</p>
          <h1 className="mt-4 text-4xl font-semibold sm:text-5xl">{post.title}</h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">{post.content}</p>
        </div>
      </section>
    </main>
  );
}
