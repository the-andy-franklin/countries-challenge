import React from 'react';
import './DarkModeButton.css'

const DarkModeButton = () => {


  return (
    <button className="dark-mode-button">
      <img className="icon" src="assets/moon.svg" alt="oops" />
      <span className="text">
        Dark Mode
      </span>
    </button>
  )
}

export default DarkModeButton;
