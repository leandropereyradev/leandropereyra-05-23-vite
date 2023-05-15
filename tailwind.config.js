/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        fullHD: { raw: "(min-width: 1900px)" },
      },
      gridTemplateColumns: {
        navbar: "45% 10% 45%",
        about: "65% 35%",
      },
    },
  },
  plugins: [],
};
