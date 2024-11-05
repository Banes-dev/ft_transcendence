/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js}'],
  content: [],
  theme: {
    extend: {
      backgroundImage: {
        'custom-bg': "url('@/assets/img/fond 2 blur.png')",
      }
    },
  },
  plugins: [],
}
