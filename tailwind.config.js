/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
    },
    fontFamily: {
      noto: ['"Noto Sans Display", sans-serif'],
      dosis: ['"Dosis", sans-serif'],
    },
    plugins: [],
  },
};
