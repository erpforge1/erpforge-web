import { promises as fs } from "fs";
import path from "path";

const usersPath = path.join(process.cwd(), "data", "admin", "users.json");
const postsPath = path.join(process.cwd(), "data", "blog", "posts.json");

export interface AdminUser {
  email: string;
  password: string;
  role: "ADMIN" | "AUTHOR" | "MEMBER";
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  category?: string;
  authorEmail?: string;
  authorName?: string;
  status?: "DRAFT" | "PENDING_REVIEW" | "PUBLISHED" | "REJECTED";
  submittedAt?: string;
  approvedAt?: string;
  approvedBy?: string;
  reviewNotes?: string;
}

export async function getAdminUsers() {
  const raw = await fs.readFile(usersPath, "utf8");
  return JSON.parse(raw) as AdminUser[];
}

export async function authenticateAdmin(email: string, password: string) {
  const users = await getAdminUsers();
  const user = users.find((entry) => entry.email === email && entry.password === password);
  return user ?? null;
}

export async function getPosts() {
  const raw = await fs.readFile(postsPath, "utf8");
  return JSON.parse(raw) as BlogPost[];
}

export async function getPublishedPosts() {
  const posts = await getPosts();
  return posts.filter((post) => post.status === "PUBLISHED");
}

export async function savePost(post: BlogPost) {
  const posts = await getPosts();
  const existingIndex = posts.findIndex((entry) => entry.id === post.id);
  if (existingIndex >= 0) {
    posts[existingIndex] = post;
  } else {
    posts.push(post);
  }

  await fs.writeFile(postsPath, JSON.stringify(posts, null, 2));
  return post;
}

export async function deletePost(id: string) {
  const posts = await getPosts();
  const nextPosts = posts.filter((post) => post.id !== id);
  await fs.writeFile(postsPath, JSON.stringify(nextPosts, null, 2));
  return nextPosts;
}

export async function reviewPost(id: string, status: BlogPost["status"], reviewNotes: string, adminEmail: string) {
  const posts = await getPosts();
  const target = posts.find((post) => post.id === id);

  if (!target) {
    throw new Error("Post not found");
  }

  target.status = status;
  target.reviewNotes = reviewNotes;
  target.approvedBy = adminEmail;
  target.approvedAt = new Date().toISOString();

  await fs.writeFile(postsPath, JSON.stringify(posts, null, 2));
  return target;
}
