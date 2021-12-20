import { Link } from 'react-router-dom';
import './CountryCard.css';

type Props = {
  country: {
    id: number;
    name: string;
    flag: string;
    population: number;
    region: string;
    capital: string;
  };
};

const CountryCard = ({ country }: Props) => {
  return (
    <Link to={`/country/${country.name}`} className="card">
      <img className="flag-img" src={`/${country.flag}`} alt="flag" />
      <div className="card-info">
        <h4 className="country-name">{country.name}</h4>
        <p className="population">Population: {country.population}</p>
        <p className="region">Region: {country.region}</p>
        <p className="capital">Capital: {country.capital}</p>
      </div>
    </Link>
  );
};

export default CountryCard;
