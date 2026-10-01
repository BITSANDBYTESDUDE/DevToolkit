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
  collapsed,
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
  collapsed?: boolean;
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
          {!collapsed && <p className="mb-1 px-3 text-xs font-medium text-zinc-500">{title}</p>}
          {ids.map((id) => {
            const t = find(id);
            return (
              t && (
                <button
                  key={id}
                  className={`flex w-full items-center gap-3 rounded-md px-3 py-2 text-left text-sm hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-all duration-200 ${
                    collapsed ? "justify-center px-2" : ""
                  }`}
                  onClick={() => handleSelect(id)}
                  title={collapsed ? t.name : undefined}
                >
                  <Icon className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  {!collapsed && <span className="truncate">{t.name}</span>}
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
        className={`mb-5 flex items-center gap-2.5 px-2 text-left transition-opacity hover:opacity-80 focus:outline-none ${
          collapsed ? "justify-center px-1" : ""
        }`}
        title="Return to Home"
      >
        <div className="grid h-8 w-8 place-items-center rounded-md bg-indigo-500 text-white shadow-md shadow-indigo-500/20 flex-shrink-0">
          <Wrench className="h-4 w-4" />
        </div>
        {!collapsed && (
          <div className="min-w-0">
            <strong className="text-sm font-bold tracking-tight truncate">DevToolkit</strong>
            <p className="text-[10px] text-zinc-500 dark:text-zinc-400 truncate">by BITSANDBYTESDUDE</p>
          </div>
        )}
      </button>

      <SearchBar value={query} onChange={setQuery} inputRef={searchRef} className={collapsed ? "hidden" : ""} />

      <div className="mt-5 flex-1 space-y-5 overflow-y-auto pr-1">
        {quick("Favorites", favorites, Star)}
        {quick("Recently Used", recent, Clock3)}
        <section>
          {!collapsed && <p className="mb-1 px-3 text-xs font-medium text-zinc-500">Categories</p>}
          <button
            className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors transition-all duration-200 ${
              category === "All"
                ? "bg-indigo-500 text-white"
                : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
            } ${collapsed ? "justify-center px-2" : ""}`}
            onClick={() => handleCategory("All")}
            title={collapsed ? "All tools" : undefined}
          >
            <span className={collapsed ? "hidden" : "inline"}>All tools</span>
          </button>
          {categories.map((c) => (
            <button
              key={c}
              className={`w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors transition-all duration-200 ${
                category === c
                  ? "bg-indigo-500 text-white"
                  : "hover:bg-zinc-200 dark:hover:bg-zinc-800"
              } ${collapsed ? "justify-center px-2" : ""}`}
              onClick={() => handleCategory(c)}
              title={collapsed ? c : undefined}
            >
              <span className={collapsed ? "hidden" : "inline"}>{c}</span>
            </button>
          ))}
        </section>
      </div>

      {!collapsed && (
        <a
          href="https://bitsandbytesdude.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="mt-auto px-2 pt-4 text-xs font-medium text-zinc-500 hover:text-indigo-500 dark:text-zinc-400 dark:hover:text-indigo-400"
        >
          18 Tools · BITSANDBYTESDUDE
        </a>
      )}
    </>
  );

  return (
    <>
      {/* Desktop sidebar — visible on md+ */}
      <aside className={`fixed top-14 inset-y-0 left-0 z-30 hidden flex-col border-r bg-zinc-50/80 p-3 pt-0 backdrop-blur dark:bg-[#111111]/80 md:flex sidebar-scroll transition-all duration-200 ${
        collapsed ? "w-16" : "w-64"
      }`}>
        {sidebarContent}
      </aside>

      {/* Mobile sidebar overlay + drawer — visible only when mobileOpen */}
      {mobileOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
            onClick={onMobileClose}
            aria-hidden="true"
          />
          {/* Slide-in drawer */}
          <aside className="fixed top-14 inset-y-0 left-0 z-50 flex w-full max-w-sm flex-col border-r bg-zinc-50 p-3 shadow-2xl dark:bg-[#111111] md:hidden sidebar-slide-in sidebar-scroll">
            {/* Close button */}
            <button
              className="absolute right-2 top-2 btn-ghost h-8 w-8 p-0"
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
