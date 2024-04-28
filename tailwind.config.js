/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"],
  theme: {
    container: {
      center: true,
      // padding: "2rem",
    },
    minWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    maxWidth: {
      0: "0",
      "1/4": "25%",
      "1/2": "50%",
      "3/4": "75%",
      full: "100%",
    },
    fontFamily: {
      noto: ['"Noto Sans Display", sans-serif'],
      dosis: ['"Dosis", sans-serif'],
      sans: ['"Nunito Sans Display", sans-serif'],
    },
    plugins: [],
  },
};
