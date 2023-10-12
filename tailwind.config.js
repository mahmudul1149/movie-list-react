/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        audiowave: "url('/audiowave.png')",
      },
      fontFamily: {
        poppins: "Poppins",
        prosto: "Prosto One",
      },
      colors: {
        "audio-bg": "#140026",
        primary: "#8A00CC",
        secondary: "#FE4838",
        paragraph: "#F4E9FF",
        danger: "#FF4747",
        warning: "#F7700F",
        success: "#08E487",
        dark: "#10001E",
        "success-text": "#01683D",
      },
    },
  },
  plugins: [],
};
