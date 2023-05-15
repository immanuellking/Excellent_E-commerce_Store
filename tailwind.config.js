/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        "brightRed": "#DB4444",
        "lightGrey": "#FAFAFA",
        "midGrey": "#F5F5F5"
       },
    },
  },
  plugins: [],
}
