/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {      
      colors: {
      'nav-link': '#E6E6E6',
      'header-left': '#333333',
      'header-right': '#020202',
      'secondary-gold': '#FED530',
      },
      height: {
        '770': '48.125rem',
      }
    },
    fontSize: {
      3248: ['32px', '48px'],
      1632: ['16px', '32px'],
    },
  },
  plugins: [],
}

