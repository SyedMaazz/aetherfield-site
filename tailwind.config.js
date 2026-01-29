/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // For the Logo (Screenshot shows system-ui)
        logo: ['system-ui', 'sans-serif'],
        // For the Nav Links (Screenshot shows Radio Canada Big)
        nav: ["'Radio Canada Big'", 'sans-serif'],
        // For the Main Heading (Based on previous visuals)
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}