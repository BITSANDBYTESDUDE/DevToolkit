"use client";

import { useMemo, useState } from "react";

export default function RegexTester() {
  const [pattern, setPattern] = useState("\\b\\w+\\b");
  const [flags, setFlags] = useState("g");
  const [text, setText] = useState(
    "Try a regular expression against this text."
  );

  const result = useMemo(() => {
    try {
      return {
        matches: Array.from(
          text.matchAll(
            new RegExp(pattern, flags.includes("g") ? flags : flags + "g")
          )
        ),
        error: "",
      };
    } catch (e) {
      return {
        matches: [],
        error: e instanceof Error ? e.message : "Invalid expression",
      };
    }
  }, [pattern, flags, text]);

  return (
    <section className="space-y-4">
      <div className="grid gap-3 grid-cols-1 xs:grid-cols-[1fr_auto] sm:grid-cols-[1fr_auto]">
        <input
          className="control font-mono"
          value={pattern}
          onChange={(e) => setPattern(e.target.value)}
          aria-label="Regular expression"
        />
        <input
          className="control w-full font-mono xs:w-20"
          value={flags}
          onChange={(e) => setFlags(e.target.value)}
          aria-label="Regex flags"
        />
      </div>
      {result.error && (
        <p className="text-sm text-red-500">{result.error}</p>
      )}
      <textarea
        className="control min-h-36 sm:min-h-48"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <div className="panel p-3 text-sm sm:p-4">
        <span className="font-medium text-indigo-500">
          {result.matches.length}
        </span>{" "}
        match{result.matches.length === 1 ? "" : "es"}{" "}
        {result.matches.length > 0 && (
          <span className="text-zinc-500 break-all">
            : {result.matches.map((m) => m[0]).join(", ")}
          </span>
        )}
      </div>
    </section>
  );
}
