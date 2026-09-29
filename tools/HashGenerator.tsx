"use client";

import { useMemo, useState } from "react";
import CryptoJS from "crypto-js";
import { CopyButton } from "@/components/CopyButton";

export default function HashGenerator() {
  const [text, setText] = useState("");

  const hashes = useMemo(
    () => ({
      MD5: CryptoJS.MD5(text).toString(),
      "SHA-1": CryptoJS.SHA1(text).toString(),
      "SHA-256": CryptoJS.SHA256(text).toString(),
      "SHA-512": CryptoJS.SHA512(text).toString(),
    }),
    [text]
  );

  return (
    <section className="space-y-4">
      <textarea
        className="control min-h-32 sm:min-h-40"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Text to hash"
      />
      {Object.entries(hashes).map(([name, value]) => (
        <div
          className="panel flex flex-col gap-1 p-3 sm:flex-row sm:items-center sm:gap-3"
          key={name}
        >
          <span className="text-xs font-bold text-indigo-500 sm:w-16 shrink-0">
            {name}
          </span>
          <code className="min-w-0 flex-1 break-all text-[10px] sm:text-xs">
            {value}
          </code>
          <CopyButton value={value} />
        </div>
      ))}
    </section>
  );
}
