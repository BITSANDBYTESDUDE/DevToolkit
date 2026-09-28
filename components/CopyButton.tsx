"use client";
import { useState } from "react";
import { Check, Copy } from "lucide-react";
export function CopyButton({ value, label = "Copy" }: { value: string; label?: string }) { const [copied, setCopied] = useState(false); const copy = async () => { await navigator.clipboard.writeText(value); setCopied(true); window.setTimeout(() => setCopied(false), 1600); }; return <button type="button" className="btn-ghost text-xs" onClick={copy} aria-label={label}>{copied ? <><Check className="h-4 w-4 text-emerald-500" /> Copied!</> : <><Copy className="h-4 w-4" /> {label}</>}</button>; }
