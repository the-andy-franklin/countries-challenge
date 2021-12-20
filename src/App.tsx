import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DarkModeButton from './components/DarkModeButton/DarkModeButton';

function App() {
  return (
    <div className="App">
      <NavBar>
        <DarkModeButton></DarkModeButton>
      </NavBar>
    </div>
  );
}

export default App;
