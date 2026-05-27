/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1B4F72",
        accent: "#2E86C1",
        lightAccent: "#AED6F1",
        background: "#F8FAFC",
        dark: "#0D1B2A",
        textSecondary: "#64748B",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
