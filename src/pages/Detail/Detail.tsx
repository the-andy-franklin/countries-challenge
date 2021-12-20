import './Detail.css';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { countries } from '../../mocks/countries';
import { Country } from '../../App';

type Props = {
  countries: Country[];
};

const Detail = ({ countries }: Props) => {
  const { name } = useParams();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/');
  };

  const country = countries.find((country) => country.name === name);
  console.log(country);

  return (
    <div className="detail-page">
      <div className="banner">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      </div>
      <div className="detail-container">
        <div className="flag">
          <img
            className="detail-flag-img"
            src={`/${country?.flag}`}
            alt="flag"
          />
        </div>
        <div className="details">
          <h2 className="detail-name">{country?.name}</h2>
          <div className="detail-specifics">
            <div className="detail-left">
              <p>
                <strong>Native Name:</strong> {country?.nativeName}
              </p>
              <p>
                <strong>Population:</strong> {country?.population}
              </p>
              <p>
                <strong>Region:</strong> {country?.region}
              </p>
              <p>
                <strong>Subregion:</strong> {country?.subregion}
              </p>
              <p>
                <strong>Capital:</strong> {country?.capital}
              </p>
            </div>
            <div className="detail-right">
              <p>
                <strong>Top-Level Domain:</strong> {country?.topLevelDomain}
              </p>
              <p>
                <strong>Currencies:</strong> {country?.currencies}
              </p>
              <p>
                <strong>Languages:</strong> {country?.languages}
              </p>
            </div>
          </div>
          <div className="detail-border-countries">
            <strong>Border Countries:</strong>
            {country?.borderCountries.map((borderCountry) => (
              <div className="border-country" key={borderCountry}>
                {borderCountry}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
