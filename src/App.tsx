import { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import DarkModeButton from './components/DarkModeButton/DarkModeButton';
import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import { Country } from './types/Country';
import { CountryCodes } from './types/CountryCodes';

function App() {
  const [countries, setCountries] = useState<Array<Country>>([]);
  const [countryCodes, setCountryCodes] = useState<CountryCodes>({});

  useEffect(() => {
    fetch('https://restcountries.com/v2/all')
      .then((response) => response.json())
      .then((data: Country[]) => {
        setCountries(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    countries.forEach((country: Country) => {
      setCountryCodes((prevState) => ({
        ...prevState,
        [country.alpha3Code]: country.name,
      }));
    });
    console.log(countryCodes);
  }, [countries]);

  return (
    <div className="App">
      <NavBar>
        <DarkModeButton></DarkModeButton>
      </NavBar>
      <Router>
        <Routes>
          <Route path="/" element={<Home countries={countries} />} />
          <Route
            path="/country/:name"
            element={
              <Detail countries={countries} countryCodes={countryCodes} />
            }
          />
          <Route path="/*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
