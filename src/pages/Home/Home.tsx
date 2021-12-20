import { useState } from 'react';
import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import RegionFilter from '../../components/RegionFilter/RegionFilter';
import { countries } from '../../mocks/countries';
import CountryCard from '../../components/CountryCard/CountryCard';
import { Country } from '../../App';

const Home = () => {
  const [filter, setFilter] = useState('');
  const [region, setRegion] = useState('');

  let filteredCountries = countries;
  if (filter) {
    filteredCountries = filteredCountries.filter((country: Country) =>
      country.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  if (region) {
    filteredCountries = filteredCountries.filter(
      (country: Country) =>
        country.region.toLowerCase() === region.toLowerCase(),
    );
  }
  return (
    <div className="page">
      <div className="filters">
        <SearchBar setFilter={setFilter} />
        <RegionFilter setRegion={setRegion} />
      </div>
      <div className="card-grid">
        {filteredCountries.map((country: Country) => (
          <CountryCard country={country} key={country.id} />
        ))}
      </div>
    </div>
  );
};

export default Home;
