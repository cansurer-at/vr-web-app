/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-text": "#C1F6ED",
        "secondary": "#02353C",
        "third-color": "#449342",
        "fifth-color": "#2eaf7d",
        "sixth-color": "#3FD0C9",
      },
    },
  },
  plugins: [],
};
