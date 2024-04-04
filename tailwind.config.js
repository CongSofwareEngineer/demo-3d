import plugin from 'tailwindcss/plugin'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {

    }
  },
  darkMode: 'class',
  plugins: [
    plugin(function ({ addUtilities }) {
      const newUtilities = {
        '.text-title': {
          fontSize: '40px',
          fontWeight: '700'
        },
        '.text-medium': {},
        '.text-common': {},
        '.absolute-center': {},
        '.bg-green-main': {}
      }

      addUtilities(newUtilities)
    })

  ]
}
