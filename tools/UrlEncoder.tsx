"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";

export default function UrlEncoder() {
  const [mode, setMode] = useState<"encode" | "decode">("encode");
  const [input, setInput] = useState("");

  let output = "";
  try {
    output = input
      ? mode === "encode"
        ? encodeURIComponent(input)
        : decodeURIComponent(input)
      : "";
  } catch {
    output = "Invalid encoded URL";
  }

  return (
    <section className="space-y-4">
      <div className="flex gap-2">
        <button
          className={
            mode === "encode" ? "btn-primary" : "btn-ghost border"
          }
          onClick={() => setMode("encode")}
        >
          Encode
        </button>
        <button
          className={
            mode === "decode" ? "btn-primary" : "btn-ghost border"
          }
          onClick={() => setMode("decode")}
        >
          Decode
        </button>
      </div>
      <textarea
        className="control min-h-32 sm:min-h-40"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Paste a URL or text"
      />
      <div className="panel p-3 sm:p-4">
        <CopyButton value={output} />
        <p className="mt-2 break-all text-xs sm:text-sm">
          {output || "Output appears here"}
        </p>
      </div>
    </section>
  );
}
