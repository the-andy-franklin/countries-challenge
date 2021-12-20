import React from 'react';

const SelectFilter = () => {
  return (
    <div>
      <select name="country">
        <option disabled selected></option>
        <option value="USA">USA</option>
        <option value="NZ">NZ</option>
      </select>
    </div>
  );
};

export default SelectFilter;
