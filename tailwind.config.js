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
      'gray': '#1e1e1e',
      },
      height: {
        '714': '714px',
      },
      width: {
        '658': '41.125rem',
        '600': '37.5rem',
        '502': '502px',
      },
      margin: {
        '148': '148px',
        '153': '153px',
      },
    },
    fontSize: {
      3248: ['32px', '48px'],
      1632: ['16px', '32px'],
      7296: ['72px', '96px'],
    },
    fontFamily: {
      'dm': ['"DM Sans"', 'sans-serif'],
    },
  },
  plugins: [],
}

