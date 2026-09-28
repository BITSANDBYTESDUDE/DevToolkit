"use client";

export function Footer() {
  return (
    <footer className="mt-16 border-t border-zinc-200/60 py-8 text-center dark:border-zinc-800/60">
      <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
        Powered by{" "}
        <a
          href="https://bitsandbytesdude.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="glow-text text-base"
        >
          Bitsandbytesdude
        </a>
      </p>
    </footer>
  );
}
