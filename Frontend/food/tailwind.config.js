/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       primary:'#0F084B',
       secondary: '#F0E7D8',
       def:"#fca311",
       fourth:"#AEADF0",
      imp:"#C62C7C"
      }
    },
  },
  plugins: [],
}

