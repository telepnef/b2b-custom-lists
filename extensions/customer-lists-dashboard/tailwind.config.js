/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,liquid}"],
  theme: {
    extend: {},
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
  ],
};
