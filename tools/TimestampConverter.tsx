"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";

export default function TimestampConverter() {
  const [unix, setUnix] = useState(() =>
    Math.floor(Date.now() / 1000).toString()
  );
  const [date, setDate] = useState("");
  const [zone, setZone] = useState("UTC");

  const tz = zone === "Local" ? undefined : "UTC";

  let human = "";
  try {
    human = new Intl.DateTimeFormat(undefined, {
      dateStyle: "full",
      timeStyle: "medium",
      timeZone: tz,
    }).format(new Date(Number(unix) * 1000));
  } catch {
    human = "Enter a valid Unix timestamp";
  }

  const updateDate = (v: string) => {
    setDate(v);
    const t = new Date(v).getTime();
    if (!Number.isNaN(t)) setUnix(Math.floor(t / 1000).toString());
  };

  return (
    <section className="space-y-4">
      <div className="flex flex-wrap gap-2 sm:gap-3">
        <select
          className="control w-full xs:w-28"
          value={zone}
          onChange={(e) => setZone(e.target.value)}
        >
          <option>UTC</option>
          <option>Local</option>
        </select>
        <button
          className="btn-primary"
          onClick={() =>
            setUnix(Math.floor(Date.now() / 1000).toString())
          }
        >
          Current time
        </button>
      </div>
      <label>
        <span className="label">Unix timestamp (seconds)</span>
        <input
          className="control"
          value={unix}
          onChange={(e) => setUnix(e.target.value)}
        />
      </label>
      <label>
        <span className="label">Human date to timestamp</span>
        <input
          className="control"
          type="datetime-local"
          value={date}
          onChange={(e) => updateDate(e.target.value)}
        />
      </label>
      <div className="panel flex flex-col gap-2 p-3 xs:flex-row xs:items-center xs:gap-3 sm:p-4">
        <span className="flex-1 text-xs break-all sm:text-sm">{human}</span>
        <CopyButton value={human} />
      </div>
    </section>
  );
}
