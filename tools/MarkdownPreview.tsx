"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";

export default function MarkdownPreview() {
  const [value, setValue] = useState(
    "# Hello, DevToolkit\n\nWrite **Markdown** on the left and see it render here.\n\n- Fast\n- Local\n- Useful"
  );

  return (
    <section className="grid gap-4 md:grid-cols-2">
      <textarea
        className="control min-h-64 font-mono text-sm md:min-h-96"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        aria-label="Markdown editor"
      />
      <article className="panel prose prose-zinc min-h-64 max-w-none p-4 dark:prose-invert sm:p-5 md:min-h-96">
        <ReactMarkdown>{value}</ReactMarkdown>
      </article>
    </section>
  );
}
