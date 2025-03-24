import { useEffect, useState } from "react";

const useTheam = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const localData = localStorage.getItem("theam");

    if (localData) return localData === "dark" ? true : false;
    else return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theam", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theam", "light");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return { isDarkMode, toggleDarkMode };
};

export default useTheam;
