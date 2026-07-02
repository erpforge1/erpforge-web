import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "newsletter", "subscribers.json");

export async function getSubscribers() {
  const content = await fs.readFile(filePath, "utf8");
  return JSON.parse(content) as Array<{ email: string; subscribedAt: string }>;
}

export async function addSubscriber(email: string) {
  const subscribers = await getSubscribers();
  const normalized = email.trim().toLowerCase();
  if (!normalized || subscribers.some((entry) => entry.email === normalized)) {
    return { ok: false, message: "This email is already subscribed." };
  }

  subscribers.push({ email: normalized, subscribedAt: new Date().toISOString() });
  await fs.writeFile(filePath, JSON.stringify(subscribers, null, 2));
  return { ok: true, message: "Thanks for subscribing to ERPForge." };
}
