/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily :{
        'body' : ['"Kumbh Sans"', '"sans-serif"'],
      }
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      orange: 'hsl(26, 100%, 55%)',
      pale_orange : 'hsl(25, 100%, 94%)',
      blue : {
        100 : 'hsl(223, 64%, 98%)',
        200 : 'hsl(220, 14%, 75%)',
        300: 'hsl(219, 9%, 45%)',
        400 : 'hsl(220, 13%, 13%)'
      },
      white: 'hsl(0, 0%, 100%)',
      black : 'hsl(0, 0%, 0%)'
      
    },
  },
  plugins: [],
}
