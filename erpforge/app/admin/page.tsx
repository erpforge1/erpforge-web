"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface AdminUser {
  email: string;
  role: string;
}

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category?: string;
  authorEmail?: string;
  authorName?: string;
  status?: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED";
}

export default function AdminPage() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [category, setCategory] = useState("Career");
  const [content, setContent] = useState("");

  useEffect(() => {
    void loadPosts();
  }, []);

  async function loadPosts() {
    const response = await fetch("/api/admin/posts");
    const data = await response.json();
    setPosts(data);
  }

  async function handleLogin(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    if (data.ok) {
      setUser(data.user);
      setMessage("Logged in successfully.");
    } else {
      setMessage(data.message);
    }
  }

  async function handleSave(event: React.FormEvent) {
    event.preventDefault();
    const response = await fetch("/api/admin/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: `post-${Date.now()}`,
        title,
        slug,
        excerpt,
        category,
        content,
        authorEmail: user?.email ?? "member@erpforge.in",
        authorName: user?.email ?? "ERPForge Member",
        status: user?.role === "ADMIN" || user?.role === "AUTHOR" ? "PUBLISHED" : "PENDING_REVIEW",
      }),
    });
    const data = await response.json();
    setMessage(`Saved: ${data.title}`);
    setTitle("");
    setSlug("");
    setExcerpt("");
    setCategory("Career");
    setContent("");
    await loadPosts();
  }

  async function handleDelete(id: string) {
    await fetch(`/api/admin/posts?id=${id}`, { method: "DELETE" });
    await loadPosts();
  }

  async function handleReview(id: string, status: "PUBLISHED" | "REJECTED") {
    await fetch("/api/admin/review", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status, reviewNotes: `Reviewed by ${user?.email ?? "admin"}`, adminEmail: user?.email ?? "admin@erpforge.in" }),
    });
    await loadPosts();
  }

  return (
    <main className="min-h-screen bg-[#04070d] px-6 py-24 text-slate-100 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <div className="space-y-3">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-400">Admin Workspace</p>
          <h1 className="text-4xl font-semibold sm:text-5xl">Manage blog content and publishing.</h1>
          <p className="max-w-3xl text-lg text-slate-300">Members can sign in to submit drafts for review, while admins approve or reject content before it goes live.</p>
        </div>

        {!user ? (
          <form onSubmit={handleLogin} className="max-w-xl rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <h2 className="text-2xl font-semibold">Access ERPForge workspace</h2>
            <p className="mt-2 text-sm text-slate-400">Members can use member@erpforge.in / Member123! to submit pending review posts.</p>
            <div className="mt-4 space-y-3">
              <input value={email} onChange={(event) => setEmail(event.target.value)} placeholder="Email" className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
              <input type="password" value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Password" className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
            </div>
            <button className="mt-4 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950">Log in</button>
            {message ? <p className="mt-3 text-sm text-slate-300">{message}</p> : null}
          </form>
        ) : (
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <h2 className="text-2xl font-semibold">Create a post</h2>
              <form onSubmit={handleSave} className="mt-4 space-y-3">
                <input value={title} onChange={(event) => setTitle(event.target.value)} placeholder="Title" className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
                <input value={slug} onChange={(event) => setSlug(event.target.value)} placeholder="slug" className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
                <input value={excerpt} onChange={(event) => setExcerpt(event.target.value)} placeholder="Short excerpt" className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
                <input value={category} onChange={(event) => setCategory(event.target.value)} placeholder="Category" className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
                <textarea value={content} onChange={(event) => setContent(event.target.value)} placeholder="Article content" rows={6} className="w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
                <button className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950">Publish</button>
              </form>
              {message ? <p className="mt-3 text-sm text-slate-300">{message}</p> : null}
            </section>

            <section className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-semibold">Existing posts</h2>
                <Link href="/blog" className="text-sm text-cyan-400 hover:text-cyan-300">View blog</Link>
              </div>
              <div className="mt-4 space-y-3">
                {posts.map((post) => (
                  <div key={post.id} className="rounded-xl border border-white/10 bg-slate-950/60 p-4">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="font-medium text-white">{post.title}</p>
                        <p className="mt-1 text-sm text-slate-400">/blog/{post.slug}</p>
                        <p className="mt-1 text-xs uppercase tracking-[0.2em] text-cyan-400">{post.status}</p>
                      </div>
                      <div className="flex gap-2">
                        {user?.role === "ADMIN" ? (
                          <>
                            <button onClick={() => void handleReview(post.id, "PUBLISHED")} className="text-sm text-emerald-400">Approve</button>
                            <button onClick={() => void handleReview(post.id, "REJECTED")} className="text-sm text-rose-400">Reject</button>
                          </>
                        ) : null}
                        <button onClick={() => void handleDelete(post.id)} className="text-sm text-slate-300">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}
      </div>
    </main>
  );
}
