
import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const AQILineChart = ({ city }) => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    if (city) {
      fetch(`http://127.0.0.1:8000/aqi?city=${city}`)
        .then((res) => res.json())
        .then((data) => {
          // Simulate historical data from AQI (you can update backend later)
          const mockData = Array.from({ length: 7 }, (_, i) => ({
            day: `Day ${i + 1}`,
            aqi: data.aqi + (Math.random() * 20 - 10), // random variation
          }));
          setHistory(mockData);
        })
        .catch((err) => console.error("Error fetching AQI history:", err));
    }
  }, [city]);

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-2">AQI Trend - {city}</h2>
      <LineChart width={500} height={300} data={history}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="day" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="aqi" stroke="#8884d8" />
      </LineChart>
    </div>
  );
};

export default AQILineChart;
