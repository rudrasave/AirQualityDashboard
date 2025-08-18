import React from "react";

const CitySelector = ({ onCityChange }) => {
  return (
    <select
      onChange={(e) => onCityChange(e.target.value)}
      className="p-2 border rounded-md"
    >
      <option value="Delhi">Delhi</option>
      <option value="Mumbai">Mumbai</option>
      <option value="Bangalore">Bangalore</option>
      <option value="Chennai">Chennai</option>
    </select>
  );
};

export default CitySelector;
