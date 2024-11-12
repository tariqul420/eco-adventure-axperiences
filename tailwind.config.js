/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "rgb(149, 56, 226)",
        "color-primary2": "rgba(48, 156, 8)",
        "color-secondary": "rgb(11, 11, 11)",
        "color-finely": "rgb(9, 8, 15)",
      },
      fontFamily: {
        Sora: ["Sora", "san-serif"],
      },
    },
  },
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
  ],
};
