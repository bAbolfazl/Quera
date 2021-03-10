import React, { createContext, useState } from "react";

export const ThemeContext = createContext({
  theme: "LIGHT",
  setTheme: () => {}
})


const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('LIGHT')
  const value = { themeMode, setThemeMode }

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export default ThemeProvider
