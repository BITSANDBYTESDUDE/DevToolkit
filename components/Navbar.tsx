"use client";

import { ChevronLeft, ChevronRight, Github, Menu, Wrench } from "lucide-react";
import { SearchBar } from "./SearchBar";
import { ThemeToggle } from "./ThemeToggle";
import type { RefObject } from "react";

export function Navbar({
  query,
  setQuery,
  searchRef,
  onGoHome,
  dark,
  toggleTheme,
  onMenuToggle,
  sidebarCollapsed,
  onSidebarCollapseToggle,
}: {
  query: string;
  setQuery: (q: string) => void;
  searchRef: RefObject<HTMLInputElement>;
  onGoHome?: () => void;
  dark?: boolean;
  toggleTheme?: () => void;
  onMenuToggle?: () => void;
  sidebarCollapsed?: boolean;
  onSidebarCollapseToggle?: () => void;
}) {
  return (
    <header className={`sticky top-0 z-20 flex h-14 items-center gap-2 border-b bg-white/80 px-3 backdrop-blur dark:bg-[#0A0A0A]/80 sm:h-16 sm:gap-3 sm:px-4 transition-all duration-200 ${sidebarCollapsed ? 'md:pl-16' : 'md:pl-64'}`}>
      {/* Mobile hamburger button — visible below md */}
      <button
        className="btn-ghost h-9 w-9 p-0 md:hidden"
        onClick={onMenuToggle}
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Desktop sidebar collapse toggle — visible on md+ */}
      {onSidebarCollapseToggle && (
        <button
          className="btn-ghost h-9 w-9 p-0 hidden md:flex"
          onClick={onSidebarCollapseToggle}
          aria-label={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          title={sidebarCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {sidebarCollapsed ? (
            <ChevronRight className="h-5 w-5" />
          ) : (
            <ChevronLeft className="h-5 w-5" />
          )}
        </button>
      )}

      {/* Brand — visible between sm and md */}
      <button
        onClick={onGoHome}
        className="flex items-center gap-2 text-left transition-opacity hover:opacity-80 focus:outline-none"
        title="Return to Home"
      >
        <div className="grid h-8 w-8 place-items-center rounded-md bg-indigo-500 text-white">
          <Wrench className="h-4 w-4" />
        </div>
        <div className="hidden sm:block md:hidden">
          <span className="font-bold">DevToolkit</span>
        </div>
      </button>

      {/* Search bar — flexible width, hidden on very small, shown inline on sm+ */}
      <div className="mx-auto hidden w-full max-w-md sm:block">
        <SearchBar value={query} onChange={setQuery} inputRef={searchRef} />
      </div>

      <div className="ml-auto flex items-center gap-1">
        <a
          className="btn-ghost h-9 w-9 p-0"
          href="https://github.com/BITSANDBYTESDUDE"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub Repository"
          title="GitHub"
        >
          <Github className="h-4 w-4" />
        </a>
        <ThemeToggle dark={dark} onToggle={toggleTheme} />
        <a
          href="https://bitsandbytesdude.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="ml-2 hidden text-xs font-medium text-zinc-500 hover:text-indigo-500 md:block dark:text-zinc-400 dark:hover:text-indigo-400"
        >
          BITSANDBYTESDUDE
        </a>
      </div>
    </header>
  );
}
