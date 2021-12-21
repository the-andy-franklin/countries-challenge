import { useState } from 'react';
import './Home.css';
import SearchBar from '../../components/SearchBar/SearchBar';
import RegionFilter from '../../components/RegionFilter/RegionFilter';
import CountryCard from '../../components/CountryCard/CountryCard';
import { Country } from '../../types/Country';

type Props = {
  countries: Country[] | undefined;
};

const Home = ({ countries }: Props) => {
  const [filter, setFilter] = useState('');
  const [region, setRegion] = useState('');

  const uniqueRegions: string[] = [];
  countries?.forEach((country) => {
    if (!uniqueRegions.includes(country.region)) {
      uniqueRegions.push(country.region);
    }
  });

  let filteredCountries = countries;

  if (filter) {
    filteredCountries = filteredCountries?.filter((country: Country) =>
      country.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }

  if (region) {
    filteredCountries = filteredCountries?.filter(
      (country: Country) =>
        country.region.toLowerCase() === region.toLowerCase(),
    );
  }

  return (
    <div className="page">
      <div className="filters">
        <SearchBar setFilter={setFilter} />
        <RegionFilter setRegion={setRegion} regions={uniqueRegions} />
      </div>
      <div className="card-grid">
        {filteredCountries?.map((country: Country, index) => (
          <div className="card-flex" key={'flex-' + index}>
            <CountryCard country={country} key={`${country.name}-${index}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
