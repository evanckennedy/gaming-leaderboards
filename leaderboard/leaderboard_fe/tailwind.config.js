/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        deepPurple: "#340068",
        veryDarkPurple: "#1A0034",
        white: "#FFFFFF",
        mediumGray: "#707070",
        brightOrange: "#FF6F00",
        lavenderGray: "#8782B3",
        vibrantPurple: "#4D0099",
        paleGreen: "#F2F5EA",
        mutedPurple: "#726E97",
      },
    },
  },
  plugins: [],
};
