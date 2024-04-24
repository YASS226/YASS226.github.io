/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Lostar: ['Lostar', 'sans'],
        poppins: ['poppins', 'sans'],
      },
    },
  },
  plugins: [],
}

