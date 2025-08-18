
import React, { useEffect, useState } from "react";

const AQICard = ({ city }) => {
  const [aqiData, setAqiData] = useState(null);

  useEffect(() => {
    if (city) {
      fetch(`http://127.0.0.1:8000/aqi?city=${city}`)
        .then((res) => res.json())
        .then((data) => setAqiData(data))
        .catch((err) => console.error("Error fetching AQI:", err));
    }
  }, [city]);

  if (!aqiData) return <p>Loading AQI for {city}...</p>;

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold">{city}</h2>
      <p className="text-lg">AQI: {aqiData.aqi}</p>
      <p className="text-sm text-gray-600">{aqiData.description}</p>
    </div>
  );
};

export default AQICard;
