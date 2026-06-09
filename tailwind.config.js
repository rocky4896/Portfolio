/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: "#050508",
          darker: "#020204",
          card: "rgba(10, 15, 30, 0.5)",
          border: "rgba(0, 240, 255, 0.15)",
          "border-pink": "rgba(255, 0, 127, 0.15)",
          blue: "#00f0ff",
          pink: "#ff007f",
          purple: "#bd00ff",
          green: "#39ff14",
          yellow: "#ffbf00",
          text: "#a9b1d6",
          light: "#e2e8f0"
        }
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
        mono: ["Space Mono", "monospace"],
        cyber: ["Orbitron", "sans-serif"],
      },
      boxShadow: {
        "glow-blue": "0 0 15px rgba(0, 240, 255, 0.35)",
        "glow-pink": "0 0 15px rgba(255, 0, 127, 0.35)",
        "glow-purple": "0 0 15px rgba(189, 0, 255, 0.35)",
        "glow-green": "0 0 15px rgba(57, 255, 20, 0.35)",
        "glass": "0 8px 32px 0 rgba(0, 0, 0, 0.5)",
        "glass-glow": "0 8px 32px 0 rgba(0, 240, 255, 0.1), inset 0 0 32px 0 rgba(0, 240, 255, 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-medium": "float 5s ease-in-out infinite",
        "float-fast": "float 3s ease-in-out infinite",
        "grid-move": "gridMove 20s linear infinite",
        "scanline": "scanline 6s linear infinite",
        "glow-pulse": "glowPulse 3s infinite alternate",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        gridMove: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(40px)" },
        },
        scanline: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
        glowPulse: {
          "0%": { boxShadow: "0 0 10px rgba(0, 240, 255, 0.2)" },
          "100%": { boxShadow: "0 0 25px rgba(0, 240, 255, 0.6)" },
        }
      },
      backdropBlur: {
        xs: "2px",
      }
    },
  },
  plugins: [],
}
