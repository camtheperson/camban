import type { Config } from 'tailwindcss'

const defaultTheme = require('tailwindcss/defaultTheme')

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './app/components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        body: '#4B4B4B',
        primary: '#223377',
        secondary: '#FF7733',
        'secondary-light': '#f98d5d'
      },
      fontFamily: {
        'sans': ['"owners-text"', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
export default config
