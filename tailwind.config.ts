import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0a192f',
        secondary: '#172a45',
        third: '#303C55',
        quaternary: '#8892b0',
        accent: '#64ffda',
      },
    },
  },
  plugins: [],
}
export default config
