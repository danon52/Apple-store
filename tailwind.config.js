/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"], // путь к твоим файлам
  theme: {
    extend: {
      fontFamily: {
        sans: ['ABeeZee', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}