"use client";

import { Clock3, Star, Wrench, X } from "lucide-react";
import { categories, tools, type ToolCategory, type ToolId } from "@/lib/tools-config";
import { SearchBar } from "./SearchBar";
import type { RefObject } from "react";

export function Sidebar({
  query,
  setQuery,
  category,
  setCategory,
  favorites,
  recent,
  onSelect,
  onGoHome,
  searchRef,
  mobileOpen,
  onMobileClose,
}: {
  query: string;
  setQuery: (q: string) => void;
  category: ToolCategory | "All";
  setCategory: (c: ToolCategory | "All") => void;
  favorites: ToolId[];
  recent: ToolId[];
  onSelect: (id: ToolId) => void;
  onGoHome: () => void;
  searchRef: RefObject<HTMLInputElement>;
  mobileOpen?: boolean;
  onMobileClose?: () => void;
}) {
  const find = (id: ToolId) => tools.find((t) => t.id === id);

  const handleSelect = (id: ToolId) => {
    onSelect(id);
    onMobileClose?.();
  };

  const handleCategory = (c: ToolCategory | "All") => {
    setCategory(c);
    onGoHome();
    onMobileClose?.();
  };

  const quick = (title: string, ids: ToolId[], Icon: typeof Star) => (
    <>
      {ids.length > 0 && (
        <section>
          <p className="mb-1 px-3 text-xs font-medium text-zinc-500">{title}</p>
          {ids.map((id) => {
            const t = find(id);
            return (
              t && (
                <button
                  key={id}
                  className="flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800"
                  onClick={() => handleSelect(id)}
                >
                  <Icon className="h-4 w-4 text-indigo-500" />
                  {t.name}
                </button>
              )
            );
          })}
        </section>
      )}
    </>
  );

  const sidebarContent = (
    <>
      <button
        onClick={() => {
          onGoHome();
          onMobileClose?.();
        }}
        className="mb-5 flex items-center gap-2.5 px-2 text-left transition-opacity hover:opacity-80 focus:outline-none"
        title="Return to Home"
      >
        <div className="grid h-8 w-8 place-items-center rounded-md bg-indigo-500 text-white shadow-md shadow-indigo-500/20">
          <Wrench className="h-4 w-4" />
        </div>
        <div>
          <strong className="text-sm font-bold tracking-tight">DevToolkit</strong>
          <p className="text-[10px] text-zinc-500 dark:text-zinc-400">by BITSANDBYTESDUDE</p>
        </div>
      </button>

      <SearchBar value={query} onChange={setQuery} inputRef={searchRef} />

      <div className="mt-5 flex-1 space-y-5 overflow-y-auto pr-1">
        {quick("Favorites", favorites, Star)}
        {quick("Recently Used", recent, Clock3)}
        <section>
          <p className="mb-1 px-3 text-xs font-medium text-zinc-500">Categories</p>
          <button
            className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
              category === "All"
                ? "bg-indigo-500 text-white"
                : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
            }`}
            onClick={() => handleCategory("All")}
          >
            All tools
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors ${
                category === c
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
              }`}
              onClick={() => handleCategory(c)}
            >
              {c}
            </button>
          ))}
        </section>
      </div>

      <a
        href="https://bitsandbytesdude.vercel.app"
        target="_blank"
        rel="noreferrer"
        className="mt-auto px-2 pt-4 text-xs font-medium text-zinc-500 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
      >
        18 Tools · BITSANDBYTESDUDE
      </a>
    </>
  );

  return (
    <>
      {/* Desktop sidebar — always visible on lg+ */}
      <aside className="fixed inset-y-0 left-0 z-30 hidden w-[260px] flex-col border-r bg-zinc-50/80 p-3 backdrop-blur dark:bg-[#111111]/80 lg:flex">
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay + drawer — visible only when mobileOpen */}
      {mobileOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={onMobileClose}
            aria-hidden="true"
          />
          {/* Slide-in drawer */}
          <aside className="fixed inset-y-0 left-0 z-50 flex w-[280px] max-w-[85vw] flex-col border-r bg-zinc-50 p-3 shadow-2xl dark:bg-[#111111] lg:hidden sidebar-slide-in">
            {/* Close button */}
            <button
              className="absolute right-3 top-3 btn-ghost h-8 w-8 p-0"
              onClick={onMobileClose}
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarContent}
          </aside>
        </>
      )}
    </>
  );
}
