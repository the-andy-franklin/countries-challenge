import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import DarkModeButton from './components/DarkModeButton/DarkModeButton';
import SearchBar from './components/SearchBar/SearchBar';
import SelectFilter from './components/SelectFilter/SelectFilter';
import { countries } from './mocks/countries';
import CountryCard from './components/CountryCard/CountryCard';

function App() {
  return (
    <div className="App">
      <NavBar>
        <DarkModeButton></DarkModeButton>
      </NavBar>
      <div className="page">
        <div className="filters">
          <SearchBar />
          <SelectFilter />
        </div>
        <div className="card-grid">
          {countries.map((country) => (
            <CountryCard country={country} key={country.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
