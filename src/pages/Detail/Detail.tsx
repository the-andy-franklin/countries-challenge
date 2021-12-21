import './Detail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { Country } from '../../types/Country';

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

  return (
    <div className="detail-page">
      <div className="banner">
        <button className="back-button" onClick={handleBack}>
          ← Back
        </button>
      </div>
      <div className="detail-container">
        <div className="flag-wrapper">
          <img
            className="detail-flag-img"
            src={country?.flags.svg}
            alt="flag"
          />
        </div>
        <div className="details">
          <h2 className="detail-name">{country?.name}</h2>
          <div className="detail-specifics">
            <div className="detail-left">
              <p className="item">
                <strong>Native Name: </strong>
                {country?.nativeName}
              </p>
              <p className="item">
                <strong>Population: </strong>
                {country?.population}
              </p>
              <p className="item">
                <strong>Region: </strong>
                {country?.region}
              </p>
              <p className="item">
                <strong>Subregion: </strong>
                {country?.subregion}
              </p>
              <p className="item">
                <strong>Capital: </strong>
                {country?.capital}
              </p>
            </div>
            <div className="detail-right">
              <p className="item">
                <strong>Top-Level Domain: </strong>
                {country?.topLevelDomain}
              </p>
              <p className="item">
                <strong>Currencies: </strong>
                {country?.currencies
                  ?.map((currency) => currency.name)
                  .join(', ')}
              </p>
              <p className="item">
                <strong>Languages: </strong>
                {country?.languages
                  ?.map((language) => language.name)
                  .join(', ')}
              </p>
            </div>
          </div>
          <div className="border-wrapper">
            <strong className="border-title">Border Countries:</strong>
            <div className="border-countries">
              {country?.borders?.map((borderCountry) => (
                <div className="border-country" key={borderCountry}>
                  {borderCountry}
                </div>
              )) || <div className="border-country">&lt;None&gt;</div>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
