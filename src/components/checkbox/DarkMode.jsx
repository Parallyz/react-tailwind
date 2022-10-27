import React, { useEffect, useState } from "react";
import { changeTheme, ifDarkTheme } from "../../utils/theme.js";

import { Switch } from "@headlessui/react";

//import styles from "./DarkMode.module.scss";

export default function DarkMode() {
  const [darkMode, setDarkMode] = useState(() => {
    return ifDarkTheme();
  });

  //? Set theme
  useEffect(() => {
    darkMode ? (localStorage.theme = "dark") : (localStorage.theme = "light");
    changeTheme();
  }, [darkMode]);

  return (
    <>
      {
        //? Dark mode does not work with css module
      }

      {
        //<div className={`${styles.dark__test}  dark:bg-stone-400`}>
        //  DarkMode
        //</div>
      }
      <>
        <Switch
          checked={darkMode}
          onChange={setDarkMode}
          className="switch__container dark:bg-white"
        >
          <span
            aria-hidden="true"
            className={`${darkMode ? "translate-x-9" : "translate-x-0"}
            switch__circle dark:bg-black`}
          />
        </Switch>
      </>
    </>
  );
}
