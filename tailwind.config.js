import PrimeUI from 'tailwindcss-primeui';
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [    "./src/**/*.{html,ts}",
    "./node_modules/primeng/**/*.{js,ts}"],
  theme: {
    extend: {},
  },
  plugins: [PrimeUI],
}

