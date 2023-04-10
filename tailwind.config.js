/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        fire: '#FC7D23',
        grass: '#9BCB50',
        poision: '#B87EC8',
        water: '#4592C3',
        bug: '#719E3E',
        flying: '#3CC7EE',
        psychic: '#F365B9',
        ice: '#51C3E7',
      },
    },
  },
  plugins: [],
}
