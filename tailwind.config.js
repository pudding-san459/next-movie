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
      'lightGray': '#3D3D3D',
      'primary/black': '#525252',
      'secondary/yellow': '#FED530',
      'other/gray': '#2E2E2E',
      },
      height: {
        '714': '714px',
        '560': '560px',
        '368': '368px',
      },
      width: {
        '658': '41.125rem',
        '600': '37.5rem',
        '502': '502px',
        '560': '560px',
        '349': '349px',
        '320': '320px',
        '282': '282px',
        '110': '110px',
        '65': '65px',
        '160': '160px',
        '880': '880px',
      },
      margin: {
        '148': '148px',
        '153': '153px',
        '133': '133px',
        '99': '99px',
        '61': '61px',
      },
    },
    fontSize: {
      3248: ['32px', '48px'],
      1632: ['16px', '32px'],
      7296: ['72px', '96px'],
      6488: ['64px', '88px'],
    },
    fontFamily: {
      'dm': ['"DM Sans"', 'sans-serif'],
    },
  },
  plugins: [],
}

