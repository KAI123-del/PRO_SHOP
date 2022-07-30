/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        lime: colors.lime,
        orange: colors.orange,
        sky: colors.sky,
        amber: colors.amber,
        rose: colors.rose,
        indigo: colors.indigo,
        cyan: colors.cyan,
        teal: colors.teal,
        emerald: colors.emerald,
        lime: colors.lime,
        voilet: colors.voilet,
        slate: colors.slate,
      },
      fontFamily: {
        'gotham': 'Gotham Ultra',
      }
    },
    ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {})
  },

  plugins: [],
}
