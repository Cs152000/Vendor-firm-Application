/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primary:'#e9edc9',
       secondary: '#457b9d',
       def:"#fca311",
       fourth:"#AEADF0"
      }
    },
  },
  plugins: [],
}

