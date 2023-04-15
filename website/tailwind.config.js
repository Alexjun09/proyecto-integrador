/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main: "#03fef8",
        secondary: "#0C2840",
        mid: "00f2fe",
      },
      screens: {
        mac: "2560px",
        normal: "1920px",
      },
    },
  },
  plugins: [require("daisyui")],
};
