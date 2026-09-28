/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#0B1120",
        "surface-dark": "#0B1120",
        "slate-card": "#1E293B",
        "slate-card-border": "#334155",
        "magenta-neon": "#D946EF",
        "ice-white": "#F8FAFC",
        "slate-subtle": "#94A3B8",
        "slate-muted": "#CBD5E1"
      },
      fontFamily: {
        "display": ["Plus Jakarta Sans", "Inter", "sans-serif"],
        "body": ["Inter", "Segoe UI", "sans-serif"],
        "mono": ["JetBrains Mono", "monospace"]
      }
    }
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}
