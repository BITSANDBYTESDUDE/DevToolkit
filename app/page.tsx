"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Sidebar } from "@/components/Sidebar";
import { ToolGrid } from "@/components/ToolGrid";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { useSearch } from "@/hooks/useSearch";
import { tools, type ToolCategory, type ToolId } from "@/lib/tools-config";

import JsonFormatter from "@/tools/JsonFormatter";
import Base64Tool from "@/tools/Base64Tool";
import UrlEncoder from "@/tools/UrlEncoder";
import RegexTester from "@/tools/RegexTester";
import HashGenerator from "@/tools/HashGenerator";
import UuidGenerator from "@/tools/UuidGenerator";
import HtmlEscape from "@/tools/HtmlEscape";
import DiffChecker from "@/tools/DiffChecker";
import WordCounter from "@/tools/WordCounter";
import CaseConverter from "@/tools/CaseConverter";
import LoremIpsum from "@/tools/LoremIpsum";
import MarkdownPreview from "@/tools/MarkdownPreview";
import ColorPicker from "@/tools/ColorPicker";
import CssGradient from "@/tools/CssGradient";
import PasswordGenerator from "@/tools/PasswordGenerator";
import TimestampConverter from "@/tools/TimestampConverter";
import QrGenerator from "@/tools/QrGenerator";
import ImageCompressor from "@/tools/ImageCompressor";

const views: Record<ToolId, React.ComponentType> = {
  json: JsonFormatter,
  base64: Base64Tool,
  url: UrlEncoder,
  regex: RegexTester,
  hash: HashGenerator,
  uuid: UuidGenerator,
  html: HtmlEscape,
  diff: DiffChecker,
  word: WordCounter,
  case: CaseConverter,
  lorem: LoremIpsum,
  markdown: MarkdownPreview,
  color: ColorPicker,
  gradient: CssGradient,
  password: PasswordGenerator,
  timestamp: TimestampConverter,
  qr: QrGenerator,
  image: ImageCompressor,
};

export default function Home() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<ToolCategory | "All">("All");
  const [selected, setSelected] = useState<ToolId | null>(null);
  const [favorites, setFavorites] = useState<ToolId[]>([]);
  const [recent, setRecent] = useState<ToolId[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const searchRef = useRef<HTMLInputElement>(null);

  const filtered = useSearch(query, category);

  useEffect(() => {
    try {
      setFavorites(JSON.parse(localStorage.getItem("dt-favorites") || "[]"));
      setRecent(JSON.parse(localStorage.getItem("dt-recent") || "[]"));
    } catch {
      // safe fallback
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.key === "/" &&
        document.activeElement?.tagName !== "INPUT" &&
        document.activeElement?.tagName !== "TEXTAREA"
      ) {
        e.preventDefault();
        searchRef.current?.focus();
      }
      // Close mobile sidebar on Escape
      if (e.key === "Escape" && sidebarOpen) {
        setSidebarOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [sidebarOpen]);

  // Lock body scroll when mobile sidebar is open
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [sidebarOpen]);

  const choose = (id: ToolId) => {
    setSelected(id);
    setRecent((old) => {
      const next = [id, ...old.filter((x) => x !== id)].slice(0, 5);
      localStorage.setItem("dt-recent", JSON.stringify(next));
      return next;
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const toggleFavorite = (id: ToolId) => {
    setFavorites((old) => {
      const next = old.includes(id) ? old.filter((x) => x !== id) : [id, ...old];
      localStorage.setItem("dt-favorites", JSON.stringify(next));
      return next;
    });
  };

  const goHome = () => {
    setSelected(null);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const tool = selected ? tools.find((t) => t.id === selected) : null;
  const Tool = selected ? views[selected] : null;

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar
        query={query}
        setQuery={setQuery}
        searchRef={searchRef}
        onGoHome={goHome}
        onMenuToggle={() => setSidebarOpen((o) => !o)}
      />
      <Sidebar
        query={query}
        setQuery={setQuery}
        category={category}
        setCategory={setCategory}
        favorites={favorites}
        recent={recent}
        onSelect={choose}
        onGoHome={goHome}
        searchRef={searchRef}
        mobileOpen={sidebarOpen}
        onMobileClose={() => setSidebarOpen(false)}
      />

      <main className="flex-1 mx-auto w-full max-w-7xl px-3 py-6 sm:px-4 sm:py-8 lg:ml-[260px] lg:px-8">
        {/* Mobile-only search bar (visible below sm since Navbar hides it) */}
        <div className="mb-4 sm:hidden">
          <SearchBar value={query} onChange={setQuery} inputRef={searchRef} />
        </div>

        <AnimatePresence mode="wait">
          {tool && Tool ? (
            <motion.section
              key={tool.id}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -16 }}
              transition={{ duration: 0.2 }}
            >
              <button
                className="btn-ghost mb-4 -ml-1 text-sm text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white sm:mb-6 sm:-ml-2"
                onClick={goHome}
              >
                <ArrowLeft className="h-4 w-4 mr-1" /> All tools
              </button>

              <header className="mb-5 sm:mb-7">
                <div className="mb-3 grid h-10 w-10 place-items-center rounded-lg bg-indigo-500/10 text-indigo-500 sm:h-12 sm:w-12">
                  <tool.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                </div>
                <h1 className="text-xl font-bold tracking-tight sm:text-2xl">{tool.name}</h1>
                <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400 sm:text-sm">
                  {tool.description}
                </p>
              </header>

              <div className="panel p-3 sm:p-4 md:p-6">
                <Tool />
              </div>
            </motion.section>
          ) : (
            <motion.section
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <header className="mb-6 sm:mb-8">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-indigo-500">
                  BITSANDBYTESDUDE
                </p>
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
                  Your Developer Toolkit
                </h1>
                <p className="mt-2 max-w-xl text-sm text-zinc-500 dark:text-zinc-400 sm:mt-3 sm:text-base">
                  A focused collection of practical tools for developers and designers. Everything runs locally in your browser.
                </p>
              </header>

              <ToolGrid
                items={filtered}
                favorites={favorites}
                onSelect={choose}
                onFavorite={toggleFavorite}
              />
            </motion.section>
          )}
        </AnimatePresence>

        <Footer />
      </main>
    </div>
  );
}
