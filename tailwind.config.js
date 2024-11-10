/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customblue: '#003366 ', // Nombre personalizado para el color
        customRed: '#ad3333'
      },
    },
  },
  plugins: [],
}
