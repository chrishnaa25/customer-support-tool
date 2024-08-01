/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        customRed: "rgba(204, 41, 41, 1)",
        customSlate: "rgba(242, 244, 247, 1)",
        customBlue: "rgba(24, 75, 165, 1)",
        customWhite: "rgba(255, 255, 255, 1)",
        customOtp: "rgba(85, 98, 117, 1)",
        customGreen: "rgba(11, 158, 15, 1)",
        customBorder: "rgba(211, 205, 181, 1)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
