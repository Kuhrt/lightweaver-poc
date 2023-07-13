/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts}',
    './node_modules/flowbite/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dimensions-background': "url('/images/dimensions-background.png')",
        'gradient-orange': 'linear-gradient(225deg, #FFB81C 0%, #FF7500 100%)',
        'gradient-lime':
          'linear-gradient(209.48deg, #C4D600 -1.18%, #00C389 98.16%)',
        'gradient-teal': 'linear-gradient(45deg, #297BF6 0%, #00C389 100%)',
        'gradient-purple': 'linear-gradient(45deg, #4814DD 0%, #ED30A8 100%)',
      },
      boxShadow: {
        glow: '0 0 12px 1px rgba(255, 255, 255, 0.5)',
        'glow-gold': '0px 0px 10px #FFB81C, inset 0px 0px 6px #FFB81C',
      },
      colors: {
        amber: {
          500: '#FFB81C',
        },
        dark: '#101010',
        gray: {
          200: '#E5E5E5',
          300: '#C5C5C5',
          500: '#7D7D7D'
        },
        green: {
          500: '#00C35A',
        },
        indigo: {
          500: '#6A6DCD',
        },
        lime: {
          500: '#C4D600',
        },
        orange: {
          500: '#FF7500',
        },
        purple: {
          500: '#8A1A61',
        },
        magenta: {
          500: '#ED30A8',
        },
        red: {
          500: '#FF2E00',
        },
        teal: {
          500: '#00C389',
        },
      },
    },
  },
  plugins: [require('flowbite/plugin')],
}
