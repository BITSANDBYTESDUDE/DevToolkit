"use client";

import { motion } from "framer-motion";
import { SearchX } from "lucide-react";
import { ToolCard } from "./ToolCard";
import type { ToolId, ToolMeta } from "@/lib/tools-config";

export function ToolGrid({
  items,
  favorites,
  onSelect,
  onFavorite,
}: {
  items: ToolMeta[];
  favorites: ToolId[];
  onSelect: (id: ToolId) => void;
  onFavorite: (id: ToolId) => void;
}) {
  if (!items.length)
    return (
      <div className="panel grid min-h-48 place-items-center p-6 text-center sm:min-h-64 sm:p-8">
        <div>
          <SearchX className="mx-auto mb-3 h-8 w-8 text-zinc-400" />
          <h2 className="font-semibold">No tools found</h2>
          <p className="mt-1 text-sm text-zinc-500">
            Try a different search or category.
          </p>
        </div>
      </div>
    );

  return (
    <motion.div
      layout
      className="grid gap-3 grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 sm:gap-4"
    >
      {items.map((tool) => (
        <ToolCard
          key={tool.id}
          tool={tool}
          favorite={favorites.includes(tool.id)}
          onSelect={() => onSelect(tool.id)}
          onFavorite={() => onFavorite(tool.id)}
        />
      ))}
    </motion.div>
  );
}
