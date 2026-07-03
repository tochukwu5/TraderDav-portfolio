module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: '#050810', 900: '#070b14', 800: '#0d1117', 700: '#111827', 600: '#1a2235', 500: '#243050' },
        indigo: { DEFAULT: '#6366f1', light: '#818cf8', dark: '#4f46e5', dim: '#312e81' },
        cyan: { DEFAULT: '#06b6d4', light: '#22d3ee', dark: '#0891b2' },
        emerald: { DEFAULT: '#10b981', light: '#34d399', dark: '#059669' },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Space Mono', 'monospace'],
        display: ['Syne', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
