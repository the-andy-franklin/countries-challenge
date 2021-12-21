import { Dispatch, SetStateAction, ChangeEvent } from 'react';
import './SearchBar.css';
import { ReactComponent as Search } from '../../assets/search.svg';

type Props = {
  setFilter: Dispatch<SetStateAction<string>>;
};

const SearchBar = ({ setFilter }: Props) => {
  const handleFilter = (e: ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  return (
    <div className="input-container">
      <input
        className="input"
        type="text"
        placeholder="Search for a country"
        onChange={(e) => handleFilter(e)}
      />
      <Search className="search"></Search>
    </div>
  );
};

export default SearchBar;
