"use client";

import { useRef, useState } from "react";
import { QRCodeSVG } from "qrcode.react";

export default function QrGenerator() {
  const [value, setValue] = useState("https://devtoolkit.local");
  const ref = useRef<HTMLDivElement>(null);

  const download = () => {
    const svg = ref.current?.querySelector("svg");
    if (!svg) return;
    const blob = new Blob([new XMLSerializer().serializeToString(svg)], {
      type: "image/svg+xml",
    });
    const image = new Image();
    image.onload = () => {
      const c = document.createElement("canvas");
      c.width = c.height = 512;
      const x = c.getContext("2d");
      x?.drawImage(image, 0, 0, 512, 512);
      const a = document.createElement("a");
      a.href = c.toDataURL("image/png");
      a.download = "devtoolkit-qr.png";
      a.click();
      URL.revokeObjectURL(image.src);
    };
    image.src = URL.createObjectURL(blob);
  };

  return (
    <section className="grid items-start gap-6 md:grid-cols-[1fr_auto]">
      <div className="space-y-4">
        <textarea
          className="control min-h-32 sm:min-h-40"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Text or URL"
        />
        <button className="btn-primary" onClick={download}>
          Download PNG
        </button>
      </div>
      <div
        ref={ref}
        className="panel mx-auto bg-white p-4 sm:p-5 md:mx-0"
      >
        <QRCodeSVG
          value={value || " "}
          size={180}
          level="H"
          includeMargin
          className="h-auto w-full max-w-[180px] sm:max-w-[220px]"
        />
      </div>
    </section>
  );
}
