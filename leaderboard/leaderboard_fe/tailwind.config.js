/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "primary-100": "#8782B3", // Alternating table rows (lighter purple)
        "primary-200": "#726E97", // Alternating table rows (darker purple)
        "primary-300": "#4D0099", // Leaderboard gradient start
        "primary-400": "#340068", // Background gradient start
        "primary-500": "#1A0034", // Background gradient end
        secondary: "#FF6F00", // Hover effects and highlights
        "white-100": "#FFFFFF", // Main text
        "white-200": "#F2F5EA", // Small text (e.g., dates)
        "black-100": "#1C0037",
        "black-200": "#1A0034",
        error: "#FF4D4D", // Error color
        success: "#A5FF4D", // Success color
        "information-100": "#FFEE4D", // Information color (lighter)
        "information-200": "#FFDB4D", // Information color (darker)
      },
      boxShadow: {
        "inner-custom-base": "inset 0 2px 5px rgba(28, 0, 55, 1)", // Custom inner shadow (720p)
        "inner-custom-1080": "inset 0 3px 8px rgba(28, 0, 55, 1)", // Custom inner shadow (1080p)
        "inner-custom-4k": "inset 0 6px 16px rgba(28, 0, 55, 1)", // Custom inner shadow (4k)
      },
      screens: {
        "3xl": "1920px", // Full HD (1080p)
        "4xl": "3840px", // 4K (3840px)
      },
    },
  },
  plugins: [],
};
