/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        alice: ['alice'],
        lato: ['lato'],
        quicksand: ['quicksand'],        
      },
    },
  },
  plugins: [],
};
