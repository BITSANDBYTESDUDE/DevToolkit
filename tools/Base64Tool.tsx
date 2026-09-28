"use client";
import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";
export default function Base64Tool() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");
  const [error, setError] = useState("");
  let output = "";
  try { output = input ? mode === "encode" ? btoa(unescape(encodeURIComponent(input))) : decodeURIComponent(escape(atob(input))) : ""; } catch { output = ""; }
  const run = () => setError(output || !input ? "" : "That Base64 value is not valid.");
  return <section className="space-y-4"><div className="flex gap-2"><button className={mode === "encode" ? "btn-primary" : "btn-ghost border"} onClick={() => setMode("encode")}>Encode</button><button className={mode === "decode" ? "btn-primary" : "btn-ghost border"} onClick={() => setMode("decode")}>Decode</button></div><textarea className="control min-h-40" value={input} onChange={e => { setInput(e.target.value); setError(""); }} placeholder={`Text to ${mode}`} /><button className="btn-primary" onClick={run}>{mode === "encode" ? "Encode" : "Decode"}</button>{error && <p className="text-sm text-red-500">{error}</p>}<div className="panel p-4"><CopyButton value={output} /><pre className="mt-2 whitespace-pre-wrap break-words text-sm">{output || "Output appears here"}</pre></div></section>;
}
