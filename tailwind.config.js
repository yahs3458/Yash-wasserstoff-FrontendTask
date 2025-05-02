// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-220px * 5))' }, // Width of one card * number of unique cards
        },
      },
      animation: {
        'scroll-up': 'scroll-up 10s linear infinite',
      },
    },
  },
  plugins: [],
}
