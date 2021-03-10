import React, { useContext } from "react";
import { THEME_TYPE } from "../constants";
import { ThemeContext } from './../providers/ThemeProvider'

const ThemeSwitcher = () => {
  // No need to change *return* part
  // You have to set themeMode based on context
  // const themeMode = THEME_TYPE.LIGHT;
  const { themeMode, setThemeMode } = useContext(ThemeContext)


  const handleThemeChange = (e) => { 
    if(e.target.checked) {
      setThemeMode("DARK")
    } else {
      setThemeMode('LIGHT')
    }

  };

  return (
    <div className="switch-container">
      <label className="switch">
        <input
          data-testid="theme-changer"
          type="checkbox"
          checked={themeMode === THEME_TYPE.DARK}
          onChange={handleThemeChange}
        />
        <span className="slider round"></span>
      </label>
      <span className="text-color bold">Dark mode {themeMode}</span>
    </div>
  );
};

export default ThemeSwitcher;
