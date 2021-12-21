export type Country = {
  name: string;
  topLevelDomain: string[];
  nativeName: string;
  flags: {
    svg: string;
    png: string;
  };
  population: number;
  region: string;
  subregion: string;
  capital: string;
  currencies: {
    code: string;
    name: string;
    symbol: string;
  }[];
  languages: {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
  }[];
  borders: string[];
};
