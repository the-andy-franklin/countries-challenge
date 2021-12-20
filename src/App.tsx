import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DarkModeButton from './components/DarkModeButton/DarkModeButton';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import { countries } from './mocks/countries';

export type Country = {
  id: number;
  name: string;
  nativeName: string;
  flag: string;
  population: number;
  region: string;
  subregion: string;
  capital: string;
  topLevelDomain: string;
  currencies: string;
  languages: string;
  borderCountries: string[];
};

function App() {
  return (
    <div className="App">
      <NavBar>
        <DarkModeButton></DarkModeButton>
      </NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/country/:name"
            element={<Detail countries={countries} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
