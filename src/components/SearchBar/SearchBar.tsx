import React from 'react';
import './SearchBar.css';
import { ReactComponent as Search } from '../../assets/search.svg';

const SearchBar = () => {
  return (
    <div className="input-container">
      <input className="input" type="text" placeholder="Search for a country" />
      <Search className="search"></Search>
    </div>
  );
};

export default SearchBar;
