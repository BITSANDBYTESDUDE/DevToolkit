import type { Config } from "tailwindcss";
const config: Config = { content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./tools/**/*.{ts,tsx}"], theme: { extend: { colors: { accent: "#6366F1", secondary: "#8B5CF6", success: "#10B981" }, fontFamily: { sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"] } } }, plugins: [] };
export default config;
