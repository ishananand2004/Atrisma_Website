/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7C3AED", // neon-purple
        accent: "#06B6D4", // neon-cyan
        lightAccent: "#A78BFA",
        background: "#030014", // deep-black
        dark: "#000000",
        glass: "rgba(255, 255, 255, 0.05)",
        textSecondary: "#94A3B8",
        neonPurple: "#7C3AED",
        neonCyan: "#06B6D4",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
