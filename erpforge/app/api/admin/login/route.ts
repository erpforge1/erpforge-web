import { NextResponse } from "next/server";
import { authenticateAdmin } from "@/lib/admin";

export async function POST(request: Request) {
  const body = await request.json();
  const email = body?.email as string | undefined;
  const password = body?.password as string | undefined;

  if (!email || !password) {
    return NextResponse.json({ ok: false, message: "Email and password are required." }, { status: 400 });
  }

  const user = await authenticateAdmin(email, password);
  if (!user) {
    return NextResponse.json({ ok: false, message: "Invalid email or password." }, { status: 401 });
  }

  return NextResponse.json({ ok: true, user });
}
