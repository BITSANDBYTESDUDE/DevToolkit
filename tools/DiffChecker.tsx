"use client";

import { useMemo, useState } from "react";

export default function DiffChecker() {
  const [left, setLeft] = useState("First line\nShared line\nOriginal text");
  const [right, setRight] = useState("First line\nShared line\nChanged text");

  const rows = useMemo(() => {
    const a = left.split("\n"),
      b = right.split("\n");
    return Array.from({ length: Math.max(a.length, b.length) }, (_, i) => ({
      a: a[i] ?? "",
      b: b[i] ?? "",
      same: a[i] === b[i],
    }));
  }, [left, right]);

  return (
    <section className="space-y-4">
      <div className="grid gap-4 md:grid-cols-2">
        <textarea
          className="control min-h-36 font-mono text-xs sm:min-h-48"
          value={left}
          onChange={(e) => setLeft(e.target.value)}
          aria-label="Original text"
        />
        <textarea
          className="control min-h-36 font-mono text-xs sm:min-h-48"
          value={right}
          onChange={(e) => setRight(e.target.value)}
          aria-label="Changed text"
        />
      </div>
      <div className="panel overflow-auto text-xs font-mono">
        {rows.map((r, i) => (
          <div
            className="grid grid-cols-1 border-b last:border-0 sm:grid-cols-2"
            key={i}
          >
            <code
              className={
                r.same
                  ? "p-2"
                  : "bg-red-500/10 p-2 text-red-600 dark:text-red-300"
              }
            >
              {r.a || " "}
            </code>
            <code
              className={
                r.same
                  ? "border-t p-2 sm:border-t-0"
                  : "border-t bg-emerald-500/10 p-2 text-emerald-600 dark:text-emerald-300 sm:border-t-0"
              }
            >
              {r.b || " "}
            </code>
          </div>
        ))}
      </div>
    </section>
  );
}
