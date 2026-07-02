import { NextResponse } from "next/server";
import { addSubscriber } from "@/lib/newsletter";

export async function POST(request: Request) {
  const body = await request.json();
  const email = body?.email as string | undefined;

  if (!email || !email.includes("@")) {
    return NextResponse.json({ ok: false, message: "Please provide a valid email address." }, { status: 400 });
  }

  const result = await addSubscriber(email);
  return NextResponse.json(result, { status: result.ok ? 200 : 400 });
}
