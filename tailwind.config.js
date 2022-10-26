/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");
module.exports = {
  //? Which files tailwind work
  content: ["./src/**/*.{js,jsx,ts,tsx}"],

  //? Enable dark mode by class (need to add class light or dark to html tag)
  darkMode: "class",

  theme: {
    //? Rewrite colors (All tailwind colors will disappear)
    //colors: {},
    extend: {
      //? Add

      spacing: {
        //? Add m-0.5 p-0.5 ....
        0.5: "0.12rem",
      },
      transformOrigin: {
        DEFAULT: "easy-in-out",
      },
      //? Rewrite default value
      transitionDuration: {
        DEFAULT: "200ms",
      },
      colors: {},
      //? Animation
      keyframes: {
        //? Name
        fadeIn: {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
      },
      animation: {
        //? Add animation
        fade: "fadeIn 0.3s easy",
      },
      //? import font family from index.css
      fontFamily: {
        kanit: ["Kanit", "sans-serif"],
        //? Import own font from _fonts.css
        lato: ["Lato", "sans-serif"],
      },
      //? Breakpoints
      screen: {
        sm: "576px",
        md: "768px",
        lg: "992px",
      },
    },
  },
  plugins: [
    //? From tailwind need npm
    // require('@tailwind/...')

    //? Custom plugin (import plugin)
    //? Add style
    plugin(({ addComponents, theme, addUtilities }) => {
      addComponents({
        ".btn-primary": {
          backgroundColor: theme("colors.orange.500"),
          color: "green !important",
          padding: "10px",
          border: "1px solid black",

          "&:hover": {
            color: "red",
          },
        },
      });
      //?For small styles
      addUtilities({
        ".text-shadow": {
          textShadow: "10px black",
        },
      });
    }),
  ],
};
