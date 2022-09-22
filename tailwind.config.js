module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
      // that is animation class
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },

      // that is actual animation
      keyframes: theme => ({
        fadeOut: {
          '0%': { backgroundColor: theme('colors.red') },
          '100%': { backgroundColor: theme('colors.transparent') },
        },
      }),
    },
    fontFamily:{
      vali:['VALORANT'],
      poppins:['Poppins','sans-serif']
    }
  },
  plugins: [],
} 