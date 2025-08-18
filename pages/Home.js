import React, { useState } from "react";
import CitySelector from "../components/CitySelector";
import AQICard from "../components/AQICard";
import AQILineChart from "../components/AQILineChart";

const Home = () => {
  const [selectedCity, setSelectedCity] = useState("Delhi");

  // Function to handle city change
  const handleCityChange = (city) => {
    console.log("Selected city:", city);
    setSelectedCity(city);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Air Quality Dashboard</h1>

      {/* Pass the handler here */}
      <CitySelector onCityChange={handleCityChange} />

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <AQICard city={selectedCity} />
        <AQILineChart city={selectedCity} />
      </div>
    </div>
  );
};

export default Home;
