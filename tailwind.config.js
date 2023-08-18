/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#050816",
        secondary: "#aaa6c3",
        tertiary: "#151030",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 15px 80px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
      backgroundImage: {
        "hero-pattern": "url('/src/assets/nebula.png')",
        "services-pattern": "url('/src/assets/background2.png')",
        "feature-pattern":"url('/src/assets/featuresbackground.png')",
        "feature-new-pattern":"url('/src/assets/featuresbackground2.png')",
      },
    },
  },
  plugins: [],
};