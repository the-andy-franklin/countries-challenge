import React, { useState } from 'react';
import './DarkModeButton.css';
import { ReactComponent as Moon } from '../../assets/moon.svg';

const DarkModeButton = () => {
  const [isDark, setIsDark] = useState(
    localStorage.getItem('theme') === 'dark',
  );

  if (isDark) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  const defaultDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setDark = () => {
    setIsDark((prevState) => !prevState);
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const setLight = () => {
    setIsDark((prevState) => !prevState);
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  if (defaultDark && !localStorage.getItem('theme')) {
    setDark();
  }

  const toggleTheme = () => {
    if (!isDark) {
      setDark();
    } else if (isDark) {
      setLight();
    }
  };

  return (
    <button className="dark-mode-button" onClick={toggleTheme}>
      <Moon className="moon"></Moon>
      <span className="text">Dark Mode</span>
    </button>
  );
};

export default DarkModeButton;
