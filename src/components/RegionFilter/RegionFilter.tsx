import React, { createRef, useState } from 'react';
import './RegionFilter.css';

type Props = {
  setRegion: React.Dispatch<React.SetStateAction<string>>;
};

const RegionFilter = ({ setRegion }: Props) => {
  const [selected, setSelected] = useState('Filter by Region');
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const value = e.currentTarget.innerText;
    setSelected(value === '<None>' ? 'Filter by Region' : value);
    setRegion(value === '<None>' ? '' : value);
    setIsOpen(false);
  };

  const handleDropdown = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="select-wrapper">
      <div className="select" onClick={handleDropdown}>
        <span>{selected}</span>
        {isOpen ? (
          <span className="arrow">^</span>
        ) : (
          <span className="arrow rotate">^</span>
        )}
      </div>
      {isOpen && (
        <div className="options-wrapper">
          <div className="option" onClick={(e) => handleClick(e)}>
            &lt;None&gt;
          </div>
          <div className="option" onClick={(e) => handleClick(e)}>
            North America
          </div>
          <div className="option" onClick={(e) => handleClick(e)}>
            Oceania
          </div>
          <div className="option" onClick={(e) => handleClick(e)}>
            Europe
          </div>
        </div>
      )}
    </div>
  );
};

export default RegionFilter;
