/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",

  theme: {
    container: {
      //? Default center container
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1rem", //16px
        lg: "1.25rem", //20px
        xl: "2.5rem", //40px
        xxl: "150px",
      },
    },
    extend: {
      backgroundImage: {
        chair: "url('./src/assets/img/bg-armchair.png')",
      },
      spacing: {
        sm: "1rem",
        xxl: "3.125rem",
        82: "22rem",
        12.5: "3.375rem",
      },

      fontSize: {
        xxl: "1.75rem",
      },
      transformOrigin: {
        DEFAULT: "easy-in-out",
      },
      borderRadius: {
        vsm: "0.375rem", //6px
        sm: "0.625rem", //10px
        md: "1rem", //16px
        lg: "1.25rem", //20px
        xl: "1.5rem", //24px
        xxl: "3.125rem", //50px
      },

      colors: {
        primaryColor: "#07484A",
        subPrimaryColor: "#70908B",

        secondaryGreen: "#CAF3E5",
        secondaryGrey: "#E0EFF6",
        secondaryPink: "#EEEBFF",
        secondaryYellow: "#FFF4E7",
        secondaryWhite: "#FDFBF8",

        "skeletonGrey-90": "#ADADAD",
        "skeletonGrey-80": "#C4C4C4",
        "skeletonGrey-70": "#D9D9D9",
      },

      //? import font family from index.css
      fontFamily: {
        //? Import own font from _fonts.css
        openSans: ["OpenSans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
        playfairDisplay: ["PlayfairDisplay", "sans-serif"],
      },
      //? Breakpoints
      screen: {
        sm: "576px",
        md: "768px",
        lg: "1024px",
      },
    },
  },
  plugins: [],
};
