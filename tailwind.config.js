/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,css}", // 👈 includes all files in /src, including .css
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
