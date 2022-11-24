/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx,jsx,js}"],
  theme: {
    extend: {
      fontFamily: {
        alice: ['alice', 'serif'],
        lato: ['lato', 'sans-serif'],
        quicksand: ['quicksand', 'sans-serif'],
        vt323: ["vt323", 'monospace'],
        oswald: ["oswald", "sans-serif"],        
      },
    },
  },
  plugins: [],
};
