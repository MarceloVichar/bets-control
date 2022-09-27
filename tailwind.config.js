/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        myTheme: {
          ...require('daisyui/src/colors/themes')['[data-theme=business]'],
          // primary: '#36D377',
        },
      }
    ]
  }
}
