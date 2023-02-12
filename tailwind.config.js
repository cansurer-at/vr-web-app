/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      'xs': "200px",
      'sm': "640px",
      'md': "768px",
      'lg': "1024px",
      'xl': "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        "primary-text": "#449342",
        secondary: "#02353C",
        "third-color": "#C1F6ED",
        "fifth-color": "#2eaf7d",
        "sixth-color": "#3FD0C9",
      },
    },
  },
  plugins: [],
};
