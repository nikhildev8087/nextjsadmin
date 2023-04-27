import React, { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext({theme:'light', toggelTheme: () => {}});

export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('light')

    console.log(theme)
    useEffect(() => {
        const body = document.body;
        if (theme === 'dark') {
          body.classList.add("dark");
        } else {
          body.classList.remove("dark");
        }
      }, []);

    const toggelTheme = () =>{
        setTheme((prevTheme)=>  (prevTheme === 'light' ? 'dark' : 'light'));
        localStorage.setItem('theme', theme)
    };

    return (
        <ThemeContext.Provider value={{theme, toggelTheme}}>
            {children}
        </ThemeContext.Provider>
    )

}