import React, { createContext, useState } from "react";
import { THEME_TYPE } from "../constants";

export const ThemeContext = createContext({
  themeMode: THEME_TYPE.LIGHT,
  toggleThemeMode: () => { }
})


const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState(THEME_TYPE.LIGHT)

  const toggleThemeMode = () => {
    if (themeMode === THEME_TYPE.LIGHT){
      setThemeMode(THEME_TYPE.DARK)}
    else setThemeMode(THEME_TYPE.LIGHT)
  }

  return (
    <ThemeContext.Provider
      value={{ themeMode, toggleThemeMode }}>
      {children}
    </ThemeContext.Provider>
  )
};

export default ThemeProvider;
