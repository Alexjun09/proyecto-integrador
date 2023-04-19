/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#03fef8",
          secondary: "#0C2840",
        },
      },
    ],
  },
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      sm: "375px",
      md: "1024px",
      xl: "1024px",
      xxl: "1280px",
    },
    extend: {
      colors: {
        main: "#03fef8",
        secondary: "#0C2840",
        mid: "00f2fe",
      },
    },
  },
  plugins: [require("daisyui")],
};
