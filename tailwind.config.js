/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#54BD95",
          200: "#64CFA5",
          300: "#75E1B6",
        },
        secondary:{
          100:"#222938",
          200:"#161C28"
        }
      },
      fontFamily:{
        inter:"Inter"
      }
    },
  },
  plugins: [],
}
