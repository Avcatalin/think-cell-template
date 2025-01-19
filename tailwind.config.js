/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./js/main.js"],
  theme: {
    container: {
      center: true,
      screens: {
        xl: "1264px", // Extra large screens
        "2xl": "1264px", // Keep the same for larger screens
      },
    },
    extend: {
      fontFamily: {
        jost: ["Jost", "sans-serif"],
      },
      colors: {
        green: {
          850: "#378F53",
        },
        neutral: {
          150: "#f8f8f8",
        },
        slate: {
          1000: "#231F20",
        },
      },
      letterSpacing: {
        small: "0.16px",
      },
      backgroundSize: {
        w60: "60%",
      },
    },
  },
  plugins: [],
};
