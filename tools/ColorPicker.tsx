"use client";

import { useState } from "react";
import { CopyButton } from "@/components/CopyButton";

const rgb = (h: string) => {
  const n = parseInt(h.slice(1), 16);
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 };
};

const hsl = ({ r, g, b }: { r: number; g: number; b: number }) => {
  r /= 255;
  g /= 255;
  b /= 255;
  const mx = Math.max(r, g, b),
    mn = Math.min(r, g, b),
    d = mx - mn;
  let h = 0,
    s = mx === 0 ? 0 : d / (1 - Math.abs(2 * mx - 1));
  if (d) {
    if (mx === r) h = 60 * (((g - b) / d) % 6);
    else if (mx === g) h = 60 * ((b - r) / d + 2);
    else h = 60 * ((r - g) / d + 4);
  }
  return `${Math.round((h + 360) % 360)}, ${Math.round(s * 100)}%, ${Math.round(
    ((mx + mn) / 2) * 100
  )}%`;
};

export default function ColorPicker() {
  const [hex, setHex] = useState("#6366F1");
  const valid = /^#[0-9a-fA-F]{6}$/.test(hex);
  const c = valid ? rgb(hex) : { r: 99, g: 102, b: 241 };
  const values: [string, string][] = [
    ["HEX", hex],
    ["RGB", `rgb(${c.r}, ${c.g}, ${c.b})`],
    ["HSL", `hsl(${hsl(c)})`],
  ];

  return (
    <section className="space-y-4">
      <div className="flex flex-col gap-3 xs:flex-row xs:flex-wrap xs:items-center xs:gap-4">
        <input
          className="h-14 w-full cursor-pointer rounded border xs:h-16 xs:w-24"
          type="color"
          value={valid ? hex : "#6366F1"}
          onChange={(e) => setHex(e.target.value)}
        />
        <input
          className="control max-w-full font-mono xs:max-w-xs"
          value={hex}
          onChange={(e) => setHex(e.target.value)}
          aria-label="Hex color"
        />
      </div>
      {values.map(([n, v]) => (
        <div
          className="panel flex flex-col gap-1 p-3 xs:flex-row xs:items-center xs:gap-3"
          key={n}
        >
          <span className="text-xs font-bold text-indigo-500 xs:w-10 shrink-0">
            {n}
          </span>
          <code className="flex-1 text-sm break-all">{v}</code>
          <CopyButton value={v} />
        </div>
      ))}
    </section>
  );
}
