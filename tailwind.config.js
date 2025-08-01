/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // ✅ Tailwind will scan these files
  ],
  darkMode: "class", // ✅ Use dark mode via .dark class
  theme: {
    extend: {
      colors: {
        primary: "#0f172a",
      },
    },
  },
  plugins: [],
};
