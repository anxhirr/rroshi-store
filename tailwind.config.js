/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        milk: '#DCDCDC',
        txt: '#324d67',
      },
    },
    fontFamily: {
      monospace: ['monospace', 'sans-serif'],
    },
  },
  plugins: [],
}
