/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  
  theme: {
    extend: {
      colors:{
        'primary-green': '#08C269',
        'light-green': '#E7FEF3',
        'dark-green': '#172A21',
        'green-grey': '#517966',
        'green-light-grey': '#BDDBCD',
        'dark-green-100': '#1B3127',
        
      },
      

        backgroundImage: theme => ({
          'light-bg': "url('../img/blur-bg.svg')",
          'dark-mode-bg': "url('../img/blur-dark-bg.svg')",
          'light-logo': "url('../img/mailerlite-logo.webp')",
          'dark-logo': "url('../img/mailerlite-logo-dark.webp')",
        }),

      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};

