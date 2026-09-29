"use client";

import { useMemo, useState } from "react";

export default function WordCounter() {
  const [text, setText] = useState("");

  const stats = useMemo(() => {
    const words = text.trim() ? text.trim().split(/\s+/).length : 0;
    return [
      { n: words, l: "Words" },
      { n: text.length, l: "Characters" },
      { n: text.trim() ? text.split(/[.!?]+/).filter(Boolean).length : 0, l: "Sentences" },
      { n: text.trim() ? text.split(/\n\s*\n/).filter(Boolean).length : 0, l: "Paragraphs" },
      { n: Math.max(0, Math.ceil(words / 200)), l: "Min read" },
    ];
  }, [text]);

  return (
    <section className="space-y-4">
      <textarea
        className="control min-h-48 sm:min-h-64"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Start typing or paste text here..."
      />
      <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 sm:gap-3">
        {stats.map((s) => (
          <div className="panel p-3 text-center sm:p-4" key={s.l}>
            <strong className="block text-lg sm:text-xl">{s.n}</strong>
            <span className="text-[10px] text-zinc-500 sm:text-xs">{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
