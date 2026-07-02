import { NextResponse } from "next/server";
import { reviewPost } from "@/lib/admin";

export async function POST(request: Request) {
  const body = await request.json();
  const { id, status, reviewNotes, adminEmail } = body as {
    id?: string;
    status?: "PUBLISHED" | "REJECTED";
    reviewNotes?: string;
    adminEmail?: string;
  };

  if (!id || !status || !adminEmail) {
    return NextResponse.json({ ok: false, message: "Missing review data." }, { status: 400 });
  }

  const updated = await reviewPost(id, status, reviewNotes ?? "", adminEmail);
  return NextResponse.json({ ok: true, post: updated });
}
