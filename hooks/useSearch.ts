"use client";
import { useMemo } from "react";
import { tools, type ToolCategory } from "@/lib/tools-config";
export function useSearch(query: string, category: ToolCategory | "All") { return useMemo(() => tools.filter((tool) => (category === "All" || tool.category === category) && `${tool.name} ${tool.description} ${tool.category}`.toLowerCase().includes(query.trim().toLowerCase())), [query, category]); }
