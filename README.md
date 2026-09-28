# DevToolkit — Developer & Designer Utility Suite

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)

**DevToolkit** is a complete, modern, fully client-side SaaS web application designed for developers and designers. Created by **BITSANDBYTESDUDE**, it brings together 18 essential utilities in a fast, responsive, and aesthetically stunning interface.

---

## 🧰 Tools Available (18 Tools)

| Category | Tool Name | Description |
| :--- | :--- | :--- |
| **Developer Tools** | **JSON Formatter** | Beautify, minify, validate, syntax highlight & error detection |
| **Developer Tools** | **Base64 Encoder/Decoder** | Bi-directional text to Base64 conversion |
| **Developer Tools** | **URL Encoder/Decoder** | Encode and decode URI components safely |
| **Developer Tools** | **Regex Tester** | Live regular expression pattern matching and highlight |
| **Developer Tools** | **Hash Generator** | MD5, SHA-1, SHA-256, SHA-512 cryptographic hashing |
| **Developer Tools** | **UUID Generator** | RFC 4122 v4 UUID generator with bulk generation (1-100) |
| **Developer Tools** | **HTML Escape** | Convert special HTML characters to HTML entities and back |
| **Developer Tools** | **Diff Checker** | Side-by-side line-by-line text comparison and diff highlight |
| **Text Tools** | **Word Counter** | Real-time words, characters, sentences, paragraphs & reading time |
| **Text Tools** | **Case Converter** | UPPERCASE, lowercase, Title Case, camelCase, snake_case, kebab-case |
| **Text Tools** | **Lorem Ipsum Generator** | Customizable word, sentence, and paragraph placeholder copy |
| **Text Tools** | **Markdown Preview** | Live split-screen Markdown editor and previewer |
| **Color & Design** | **Color Picker** | HEX, RGB, HSL conversion with interactive visual picker |
| **Color & Design** | **CSS Gradient Generator**| Linear/Radial CSS gradients with color stops & angle sliders |
| **Number & Date** | **Password Generator** | Secure password maker with custom length & character options |
| **Number & Date** | **Timestamp Converter** | Unix epoch timestamp ↔ Human readable date conversion |
| **Number & Date** | **QR Code Generator** | Custom text/URL to QR code with PNG image export |
| **File Tools** | **Image Compressor** | In-browser client-side Canvas image compression with quality slider |

---

## ✨ Features

- ⚡ **100% Client-Side**: All data processing stays inside your browser for maximum privacy and zero latency.
- 🎨 **Modern Minimalist UI**: Crafted with Linear/Vercel design aesthetic, smooth glassmorphism, and Framer Motion micro-animations.
- 🌙 **Dark Mode Default**: Sleek dark interface with smooth dark/light mode toggle saved to `localStorage`.
- ⭐ **Favorites & History**: Star your most used tools and access your 5 recently used tools quickly in the sidebar.
- 🔍 **Instant Real-Time Search**: Filter tools by name or category instantly using sidebar search or keyboard shortcut `/`.
- 📋 **One-Click Copy**: Copy button with visual feedback on all outputs.
- 📱 **Fully Responsive**: Optimized for desktop, tablet, and mobile displays.

---

## 🚀 Getting Started

### Prerequisites
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/BITSANDBYTESDUDE/DevToolkit.git
   cd DevToolkit
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open in browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 📁 Project Structure

```
DevToolkit/
├── app/
│   ├── globals.css         # Global Tailwind styles & dark theme definitions
│   ├── layout.tsx          # Root layout with HTML headers and metadata
│   └── page.tsx            # Main App Shell & State Manager
├── components/
│   ├── CopyButton.tsx      # One-click copy helper component
│   ├── Navbar.tsx          # Top fixed navigation bar
│   ├── SearchBar.tsx       # Search bar component with shortcut indicator
│   ├── Sidebar.tsx         # Left fixed navigation sidebar
│   ├── ThemeToggle.tsx     # Light/Dark mode switcher
│   ├── ToolCard.tsx        # Card display component with Framer Motion hover
│   └── ToolGrid.tsx        # Grid renderer with empty state handling
├── hooks/
│   └── useSearch.ts        # Custom hook for filtering tools
├── lib/
│   └── tools-config.ts     # Central registry of tool metadata and icons
├── tools/                  # 18 client-side functional tool components
│   ├── Base64Tool.tsx
│   ├── CaseConverter.tsx
│   ├── ColorPicker.tsx
│   ├── CssGradient.tsx
│   ├── DiffChecker.tsx
│   ├── HashGenerator.tsx
│   ├── HtmlEscape.tsx
│   ├── ImageCompressor.tsx
│   ├── JsonFormatter.tsx
│   ├── LoremIpsum.tsx
│   ├── MarkdownPreview.tsx
│   ├── PasswordGenerator.tsx
│   ├── QrGenerator.tsx
│   ├── RegexTester.tsx
│   ├── TimestampConverter.tsx
│   ├── UrlEncoder.tsx
│   ├── UuidGenerator.tsx
│   └── WordCounter.tsx
├── public/                 # Static assets & favicons
├── package.json            # Project dependencies & scripts
├── tailwind.config.ts      # Tailwind CSS configuration
└── tsconfig.json           # TypeScript configuration
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **Next.js 14** | React Framework (App Router) |
| **React 18** | UI Component Architecture |
| **Tailwind CSS** | Utility-first CSS Framework |
| **TypeScript** | Type-safe JavaScript |
| **Framer Motion** | Fluid animations and page transitions |
| **Lucide React** | Clean modern vector icon set |
| **CryptoJS** | Hashing algorithms (MD5, SHA-1, SHA-256, SHA-512) |
| **QRCode React** | Canvas/SVG QR Code rendering |
| **React Markdown** | Live Markdown rendering |

---

## 🌐 Deploy on Vercel

The easiest way to deploy your DevToolkit app is to use the Vercel Platform:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FBITSANDBYTESDUDE%2FDevToolkit)

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check out [issues page](https://github.com/BITSANDBYTESDUDE/DevToolkit/issues).

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 License

Distributed under the MIT License. See `LICENSE` for details.

---

<p align="center">
  Crafted with ❤️ by <strong>BITSANDBYTESDUDE</strong>
</p>
