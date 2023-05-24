/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './utils/**/*.{js,ts}',
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'dimensions-background': "url('/images/dimensions-background.svg')"
      },
      boxShadow: {
        'glow': '0 0 12px 1px rgba(255, 255, 255, 0.5)',
      },
      colors: {
        dark: '#121212'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
