import React, { useState } from 'react';
import './DarkModeButton.css';

const DarkModeButton = () => {
  const defaultDark =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;

  const setDark = () => {
    localStorage.setItem('theme', 'dark');
    document.documentElement.setAttribute('data-theme', 'dark');
  };

  const setLight = () => {
    localStorage.setItem('theme', 'light');
    document.documentElement.setAttribute('data-theme', 'light');
  };

  if (defaultDark) {
    setDark();
  }

  const toggleTheme = () => {
    console.log('going');
    if (localStorage.getItem('theme') === 'light') {
      setDark();
    } else if (localStorage.getItem('theme') === 'dark') {
      setLight();
    } else {
      setDark();
    }
  };

  return (
    <button className="dark-mode-button" onClick={toggleTheme}>
      <img className="icon" src="assets/moon.svg" alt="moon" />
      <span className="text">Dark Mode</span>
    </button>
  );
};

export default DarkModeButton;
