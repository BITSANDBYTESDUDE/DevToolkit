"use client"; import { Moon,Sun } from "lucide-react";
export function ThemeToggle({dark,onToggle}:{dark:boolean;onToggle:()=>void}){return <button className="btn-ghost h-9 w-9 p-0" onClick={onToggle} aria-label="Toggle color theme">{dark?<Sun className="h-4 w-4"/>:<Moon className="h-4 w-4"/>}</button>}
