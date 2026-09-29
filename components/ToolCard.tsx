"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import type { ToolMeta } from "@/lib/tools-config";

export function ToolCard({
  tool,
  favorite,
  onSelect,
  onFavorite,
}: {
  tool: ToolMeta;
  favorite: boolean;
  onSelect: () => void;
  onFavorite: () => void;
}) {
  const Icon = tool.icon;
  return (
    <motion.article
      layout
      whileHover={{ y: -4 }}
      className="panel group relative cursor-pointer p-4 transition-colors hover:border-indigo-500/70 sm:p-5"
      onClick={onSelect}
    >
      <button
        className="btn-ghost absolute right-2 top-2 h-8 w-8 p-0 sm:right-3 sm:top-3"
        onClick={(e) => {
          e.stopPropagation();
          onFavorite();
        }}
        aria-label={`Favorite ${tool.name}`}
      >
        <Star
          className={`h-4 w-4 ${
            favorite ? "fill-yellow-400 text-yellow-400" : "text-zinc-400"
          }`}
        />
      </button>
      <div className="mb-3 grid h-9 w-9 place-items-center rounded-md bg-indigo-500/10 text-indigo-500 sm:mb-5 sm:h-10 sm:w-10">
        <Icon className="h-4 w-4 sm:h-5 sm:w-5" />
      </div>
      <h3 className="text-sm font-semibold sm:text-base">{tool.name}</h3>
      <p className="mt-1 truncate text-xs text-zinc-500 sm:text-sm">
        {tool.description}
      </p>
      <span className="mt-3 inline-block rounded-full bg-violet-500/10 px-2 py-0.5 text-[10px] font-medium text-violet-600 dark:text-violet-300 sm:mt-4 sm:py-1 sm:text-xs">
        {tool.category}
      </span>
    </motion.article>
  );
}
