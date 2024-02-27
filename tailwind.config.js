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
      'header-right': '#000000',
      'secondary-gold': '#FED530',
      'gray': '#1e1e1e',
      'lightGray': '#3D3D3D',
      'primary/black': '#525252',
      'secondary/yellow': '#FED530',
      'other/gray': '#2E2E2E',
      'text/infield': '#CCCCCC',
      },
      height: {
        '714': '714px',
        '560': '560px',
        '368': '368px',
        '1553': '1553px',
        '54': '54px',

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
        '608': '608px',
        '229': '229px',
        '757': '757px',
        '365': '365px',
        '77': '77px',
        '399': '399px',
        '176': '176px',
        '161': '161px',
        '301': '301px',
      },
      margin: {
        '148': '148px',
        '120': '120px',
        '153': '153px',
        '133': '133px',
        '99': '99px',
        '61': '61px',
        '103': '103px',
        '105': '105px',
        '368': '368px',
        '26': '26px',
        '401': '401px',
        '19': '19px',
      },
      padding: {
        '133': '133px',
      }
    },
    fontSize: {
      3248: ['32px', '48px'],
      1632: ['16px', '32px'],
      7296: ['72px', '96px'],
      6488: ['64px', '88px'],
      4864: ['48px', '64px'],
      2432: ['24px', '32px'],
      2124: ['21px', '24px'],
    },
    fontFamily: {
      'dm': ['"DM Sans"', 'sans-serif'],
    },
  },
  plugins: [],
}

