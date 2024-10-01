/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      'blue': '#0052B1',
      'red': '#0052B1',
      'primary': '#F88D4E',
      'green': '#F88D4E',
      'gray-dark': '#EEEEEE',
      'gray': '#EFEFEF',
      'gray-light': '#F8F8F8',
      'black': '#000000',
      'white': 'FFFFFF',
      
    },
    extend: {
      fontSize: {
        's': '0.625rem', // 10px
        'xs': '0.75rem',   // 12px
        'sm': '0.875rem',  // 14px
        'base': '1rem',    // 16px
        'lg': '1.125rem',  // 18px
        'xl': '1.25rem',   // 20px
        '2xl': '1.5rem',   // 24px
        '3xl': '1.875rem', // 30px
        '4xl': '2.25rem',  // 36px
        '5xl': '3rem',     // 48px
        '6xl': '3.75rem',  // 60px
        '7xl': '4.5rem',   // 72px
        '8xl': '6rem',     // 96px
        '9xl': '8rem',     // 128px
      },
      fontWeight: {
        'thin': '100',
        'extra-light': '200',
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extra-bold': '800',
        'black': '900',
      }
    },
  },
  plugins: [],
}