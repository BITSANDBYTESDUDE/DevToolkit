"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";

export default function CssGradient() {
  const [a, setA] = useState("#6366F1");
  const [b, setB] = useState("#8B5CF6");
  const [angle, setAngle] = useState(135);
  const [type, setType] = useState("linear");

  const css =
    type === "linear"
      ? `linear-gradient(${angle}deg, ${a}, ${b})`
      : `radial-gradient(circle, ${a}, ${b})`;

  return (
    <section className="space-y-5">
      <div
        className="h-36 rounded-lg border sm:h-48"
        style={{ background: css }}
      />
      <div className="grid gap-3 grid-cols-1 xs:grid-cols-2 sm:gap-4">
        <label>
          <span className="label">First color</span>
          <input
            className="control h-10 p-1"
            type="color"
            value={a}
            onChange={(e) => setA(e.target.value)}
          />
        </label>
        <label>
          <span className="label">Second color</span>
          <input
            className="control h-10 p-1"
            type="color"
            value={b}
            onChange={(e) => setB(e.target.value)}
          />
        </label>
      </div>
      <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-end xs:gap-4">
        <label>
          <span className="label">Type</span>
          <select
            className="control w-full xs:w-32"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="linear">Linear</option>
            <option value="radial">Radial</option>
          </select>
        </label>
        {type === "linear" && (
          <label className="flex-1 min-w-0">
            <span className="label">Angle: {angle}deg</span>
            <input
              className="w-full accent-indigo-500"
              type="range"
              min="0"
              max="360"
              value={angle}
              onChange={(e) => setAngle(Number(e.target.value))}
            />
          </label>
        )}
      </div>
      <div className="panel flex flex-col gap-2 p-3 xs:flex-row xs:items-center xs:gap-3">
        <code className="min-w-0 flex-1 break-all text-xs sm:text-sm">
          background: {css};
        </code>
        <CopyButton value={`background: ${css};`} />
      </div>
    </section>
  );
}
