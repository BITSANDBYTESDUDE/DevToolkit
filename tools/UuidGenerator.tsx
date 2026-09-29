"use client";

import { useState } from "react";
import { RefreshCw } from "lucide-react";
import { CopyButton } from "@/components/CopyButton";

const generate = (count: number) =>
  Array.from({ length: count }, () => crypto.randomUUID()).join("\n");

export default function UuidGenerator() {
  const [count, setCount] = useState(1);
  const [value, setValue] = useState(() =>
    typeof crypto === "undefined" ? "" : generate(1)
  );

  const make = () => setValue(generate(count));

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap items-end gap-2 sm:gap-3">
        <label className="block">
          <span className="label">How many</span>
          <input
            className="control w-20 sm:w-24"
            type="number"
            min="1"
            max="100"
            value={count}
            onChange={(e) =>
              setCount(Math.min(100, Math.max(1, Number(e.target.value))))
            }
          />
        </label>
        <button className="btn-primary" onClick={make}>
          <RefreshCw className="h-4 w-4" />
          Generate
        </button>
        <CopyButton value={value} label="Copy all" />
      </div>
      <pre className="panel min-h-32 overflow-auto p-3 text-xs sm:min-h-40 sm:p-4 sm:text-sm break-all">
        {value}
      </pre>
    </section>
  );
}
