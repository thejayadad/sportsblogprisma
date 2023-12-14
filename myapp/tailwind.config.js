/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#fffffc',
        secondary: '#483046',
        yellow: '#f1d302',
        orange: '#ff521b',
        mildOrange: '#f4743b'
      }
    },
  },
  plugins: [],
}
