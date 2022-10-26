export function ifDarkTheme() {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    return true;
  } else {
    return false;
  }
}

export function changeTheme() {
  ifDarkTheme()
    ? document.documentElement.classList.add("dark")
    : document.documentElement.classList.remove("dark");
}
