/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontSize: {
      24: "24px",
      30: "30px",
      14: "14px",
      16: "16px",
    },
    extend: {
      colors: {
        primary: '#3498db',
        primarydark: '#2980b9',
        secondary: '#f1c40f',
        secondarydark: '#f1c40f',
        tertiary: '#ff69b4',
      },
      animation: {
        bellRing: 'bellRing 0.5s ease-in-out forwards',
        shake: 'shake 0.7s ease-in-out forwards',
      },
      keyframes: {
        bellRing: {
          '0%, 100%': { transform: 'rotateZ(0deg)', transformOrigin: 'top' },
          '15%': { transform: 'rotateZ(10deg)' },
          '30%': { transform: 'rotateZ(-10deg)' },
          '45%': { transform: 'rotateZ(5deg)' },
          '60%': { transform: 'rotateZ(-5deg)' },
          '75%': { transform: 'rotateZ(2deg)' },
        },
        shake: {
          '10%, 90%': { transform: 'translateX(-4px)' },
          '20%, 80%': { transform: 'translateX(6px)' },
          '30%, 50%, 70%': { transform: 'translateX(-8px)' },
          '40%, 60%, 80%': { transform: 'translateX(8px)' },
        },
      },
    },
  },
  plugins: [],
};
