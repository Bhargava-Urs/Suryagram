/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      borderRadius: {
        circle: '50%',
      },
      colors: {
        'cust-blue': '#2B33F1',
        grey: '#D9D9D9',
        'cust-grey': 'rgba(85, 61, 161, 0.12)',
      },
      screens: {
        sm: '900px',
        lg: '1000px',
        xl: '1444px',
      },
      fontFamily: {
        pacifico: ['Pacifico', 'sans-serif'],
        Oswald: ['Oswald', 'sans-serif'],
        playFair: ['Playfair Display', 'serif'],
      },
      animation: {
        'warm-glow': 'morph 20s ease infinite normal forwards',
      },
      keyframes: {
        morph: {
          '0%': {transform: 'rotate(0)'},
          '50%': {transform: 'scale(1,1.5) rotate(180deg)'},
          '100%': {transform: 'rotate(359deg)'},
        },
      },
    },
  },
  plugins: [],
};
