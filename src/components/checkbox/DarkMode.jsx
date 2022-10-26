import React, { useEffect, useState } from "react";
import { changeTheme, ifDarkTheme } from "../../utils/theme.js";

import styles from "./DarkMode.module.scss";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    console.log("state");
    return ifDarkTheme();
  });

  //? Set theme
  useEffect(() => {
    console.log("effect");

    darkMode ? (localStorage.theme = "dark") : (localStorage.theme = "light");
    changeTheme();
  }, [darkMode]);

  return (
    <>
      <div className=" text-green-600 dark:text-yellow-600">Some text</div>
      //? Dark mode does not work with css module
      <div className={`${styles.dark__test} dark:bg-yellow-400`}>DarkMode</div>
      <input
        type="checkBox"
        name="mode"
        defaultChecked={darkMode}
        value={darkMode}
        onChange={(e) => {
          setDarkMode(!darkMode);
        }}
      />
    </>
  );
}
