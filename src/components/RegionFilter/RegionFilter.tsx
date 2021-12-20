import React from 'react';
import './RegionFilter.css';

type Props = {
  setRegion: React.Dispatch<React.SetStateAction<string>>;
};

const RegionFilter = ({ setRegion }: Props) => {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);
    setRegion(e.target.value);
  };

  return (
    <div className="select-wrapper">
      <select
        className="select"
        name="country"
        defaultValue=""
        placeholder="Filter by Region"
        onChange={(e) => handleChange(e)}
      >
        <option value="">&lt;None&gt;</option>
        <option value="North America">North America</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};

export default RegionFilter;
