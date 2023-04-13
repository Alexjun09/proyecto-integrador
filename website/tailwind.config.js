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
        'sm': '640px', //iphone
  
        'md': '768px', //ipad
  
        'lg': '1920px', //1080
  
        'xl': '2560px', //1440
  
        '2xl': '2560px', //mac book air
      }
    },
  },
  plugins: [require("daisyui")],
};
