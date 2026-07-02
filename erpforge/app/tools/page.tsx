"use client";

import { useState } from "react";
import { Wrench } from "lucide-react";
import { Card } from "@/components/ui/card";
import { BackHomeLink } from "@/components/ui/back-home-link";

function makeId() {
  return globalThis.crypto?.randomUUID?.() ?? "00000000-0000-0000-0000-000000000000";
}

function prettyJson(value: string) {
  try {
    return JSON.stringify(JSON.parse(value), null, 2);
  } catch {
    return "Invalid JSON";
  }
}

function encodeBase64(value: string) {
  if (typeof window !== "undefined") {
    return window.btoa(value);
  }
  return Buffer.from(value).toString("base64");
}

function decodeBase64(value: string) {
  try {
    if (typeof window !== "undefined") {
      return window.atob(value);
    }
    return Buffer.from(value, "base64").toString("utf8");
  } catch {
    return "Invalid Base64";
  }
}

function formatTimestamp(value: string) {
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? "Invalid date" : date.toISOString();
}

export default function ToolsPage() {
  const [uuid, setUuid] = useState(makeId);
  const [jsonInput, setJsonInput] = useState('{"name":"ERPForge","developer":"SAP"}');
  const [jsonOutput, setJsonOutput] = useState(prettyJson('{"name":"ERPForge","developer":"SAP"}'));
  const [base64Input, setBase64Input] = useState("ERPForge");
  const [base64Output, setBase64Output] = useState(encodeBase64("ERPForge"));
  const [timestampInput, setTimestampInput] = useState(new Date().toISOString());
  const [timestampOutput, setTimestampOutput] = useState(formatTimestamp(new Date().toISOString()));

  return (
    <main className="noise-bg min-h-screen">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-16 md:px-8 lg:px-10">
        <section className="rounded-[2rem] border border-white/10 bg-white/[0.05] p-8 shadow-2xl shadow-black/20 backdrop-blur-xl md:p-10">
          <p className="text-sm font-black uppercase tracking-[0.2em] text-violet-300">Developer Tools</p>
          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Lightweight utilities for everyday SAP and software development work.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            ERPForge includes browser-based tools that help developers move faster without leaving the workflow.
          </p>
          <div className="mt-8">
            <BackHomeLink />
          </div>
        </section>

        <div className="grid gap-6 lg:grid-cols-2">
          <Card className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-black">UUID Generator</h2>
                <p className="mt-1 text-sm text-slate-400">Generate fresh identities for APIs and test data.</p>
              </div>
            </div>
            <div className="mt-4 rounded-2xl border border-cyan-500/20 bg-slate-950/70 p-4 text-sm text-cyan-300">{uuid}</div>
            <button onClick={() => setUuid(makeId())} className="mt-4 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950">Generate another</button>
          </Card>

          <Card className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-black">JSON Formatter</h2>
                <p className="mt-1 text-sm text-slate-400">Format and validate payloads in seconds.</p>
              </div>
            </div>
            <textarea value={jsonInput} onChange={(event) => setJsonInput(event.target.value)} rows={6} className="mt-4 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
            <button onClick={() => setJsonOutput(prettyJson(jsonInput))} className="mt-4 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950">Format JSON</button>
            <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">{jsonOutput}</pre>
          </Card>

          <Card className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-black">Base64 Encoder</h2>
                <p className="mt-1 text-sm text-slate-400">Encode and decode values for logs and APIs.</p>
              </div>
            </div>
            <input value={base64Input} onChange={(event) => setBase64Input(event.target.value)} className="mt-4 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
            <div className="mt-4 flex gap-3">
              <button onClick={() => setBase64Output(encodeBase64(base64Input))} className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950">Encode</button>
              <button onClick={() => setBase64Input(decodeBase64(base64Output))} className="rounded-full border border-white/10 px-5 py-2 text-sm font-semibold text-slate-100">Decode</button>
            </div>
            <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">{base64Output}</pre>
          </Card>

          <Card className="rounded-[1.5rem] border-white/10 bg-white/[0.06] p-6 backdrop-blur-xl">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-2xl bg-violet-500/15 text-violet-300">
                <Wrench className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-xl font-black">Timestamp Converter</h2>
                <p className="mt-1 text-sm text-slate-400">Turn timestamps into readable ISO values instantly.</p>
              </div>
            </div>
            <input value={timestampInput} onChange={(event) => setTimestampInput(event.target.value)} className="mt-4 w-full rounded-xl border border-white/10 bg-slate-950/70 px-4 py-3 text-sm" />
            <button onClick={() => setTimestampOutput(formatTimestamp(timestampInput))} className="mt-4 rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950">Convert</button>
            <pre className="mt-4 whitespace-pre-wrap rounded-2xl border border-white/10 bg-slate-950/60 p-4 text-sm text-slate-300">{timestampOutput}</pre>
          </Card>
        </div>
      </div>
    </main>
  );
}
