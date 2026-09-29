"use client";

export function Footer() {
  return (
    <footer className="mt-10 border-t border-zinc-200/60 py-6 text-center sm:mt-16 sm:py-8 dark:border-zinc-800/60">
      <p className="text-xs font-medium text-zinc-500 dark:text-zinc-400 sm:text-sm">
        Powered by{" "}
        <a
          href="https://bitsandbytesdude.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="glow-text text-sm sm:text-base"
        >
          Bitsandbytesdude
        </a>
      </p>
    </footer>
  );
}
