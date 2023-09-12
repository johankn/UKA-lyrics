/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
  
      // Or if using `src` directory:
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          'darkblue': '#160A59',
          'pink': '#FF809F',
          'green': '#4EB4A0',
          'background': '#FFFDF0',
          'white': '#FFFFFF'
        },
        fontFamily: {
          'original-surfer': '@apply font-original-surfer',
          'montserrat': '@apply font-monterrat',
        },
        dropShadow: {
          'box': '0 10px 10px rgba(117, 123, 183, .1)',
        }
      },
      fontSize: {
        sm: '0.75rem',
        md: '0.85rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
        '9xl': '7.052rem',
      },
  
    },
    plugins: [],
  }
  
  