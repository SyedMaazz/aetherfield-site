/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        logo: ['system-ui', 'sans-serif'],
        nav: ["'Radio Canada Big'", 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'serif'],
        'geist': ['"Geist Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
}