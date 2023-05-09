import { useState, useEffect } from "react";

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  
  useEffect(() => {
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  const toggelDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return [isDarkMode, toggelDarkMode];
};
