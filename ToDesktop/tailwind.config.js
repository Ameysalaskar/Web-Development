/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/index.html"],
  theme: {
    extend: {
      fontFamily:{
        'display': ['poppins','sans-serif'],
        'body': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

