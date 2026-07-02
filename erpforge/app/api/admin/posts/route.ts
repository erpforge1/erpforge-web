import { NextResponse } from "next/server";
import { deletePost, getPosts, savePost } from "@/lib/admin";

export async function GET() {
  const posts = await getPosts();
  return NextResponse.json(posts);
}

export async function POST(request: Request) {
  const body = await request.json();
  const post = await savePost(body);
  return NextResponse.json(post);
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  if (!id) {
    return NextResponse.json({ ok: false, message: "Missing post id." }, { status: 400 });
  }

  const posts = await deletePost(id);
  return NextResponse.json({ ok: true, posts });
}
