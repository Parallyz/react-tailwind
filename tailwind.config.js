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
        sm: "1rem",
        md: "2rem",
        lg: "4rem",
        xl: "5rem",
        xxl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      backgroundImage: {
        chair: "url('./src/assets/img/bg-armchair.png')",
      },
      spacing: {
        12: "0.75rem",
        14: "0.875rem",
        16: "1rem",
        20: "1.25rem",
        24: "1.5rem",
        32: "2rem",
        36: "2.25rem",
        40: "2.5rem",
        50: "3.125rem",
        54: "3.375rem",
        58: "3.625rem",
        60: "3.75rem",
        70: "4.375rem",
        80: "5rem",
        82: "5.125rem",
        100: "6.25rem",
        160: "10rem",
        104: "6.5rem",
        109: "6.8125rem",
        176: "11rem",
        206: "12.875rem",
      },

      fontSize: {
        16: "1rem",
        18: "1.125rem",
        20: "1.25rem",
        24: "1.5rem",
        28: "1.75rem",
        36: "2.25rem",
        48: "3rem",
        64: "4rem",
        72: "4.5rem",
      },
      transformOrigin: {
        DEFAULT: "easy-in-out",
      },
      borderRadius: {
        6: "0.375rem", //6px
        10: "0.625rem", //10px
        16: "1rem", //16px
        20: "1.25rem", //20px
        24: "1.5rem", //24px
        50: "3.125rem", //50px
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
