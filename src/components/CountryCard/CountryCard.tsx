import { Link } from 'react-router-dom';
import { Country } from '../../types/Country';
import './CountryCard.css';

type Props = {
  country: Country;
};

const CountryCard = ({ country }: Props) => {
  return (
    <Link to={`/country/${country.name}`} className="card">
      <img className="flag-img" src={country.flags.svg} alt="flag" />
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
