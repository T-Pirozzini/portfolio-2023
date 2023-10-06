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
        martian: ['Martian Mono', 'monospace'],
        varela: ['Varela Round', 'sans-serif'],  
        exo: ['Exo 2', 'sans-serif'],
        autour: ['Autour One', 'cursive'],
        specialElite: ['Special Elite', 'cursive'],
      },
    },
  },
  plugins: [],
};
