/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        ss: "400px",
        sss: "440px",
        ssss:'500px',
        xx:'560px',
      },
    },
  },
  plugins: [],
};
