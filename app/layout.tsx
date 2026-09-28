import type { Metadata } from "next";
import { ThemeProvider } from "@/components/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "DevToolkit — All-in-One Developer & Designer Utilities",
  description: "A focused collection of 18 practical client-side utilities for developers and designers by BITSANDBYTESDUDE.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white font-sans text-zinc-900 antialiased transition-colors duration-300 dark:bg-[#0A0A0A] dark:text-[#F9FAFB]">
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
