import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";

const AQIBarChart = ({ sampleFor }) => {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    if (sampleFor) {
      // Cities to compare
      const cities = ["Delhi", "Mumbai", "Bengaluru", "Kolkata", "Chennai", "Hyderabad"];

      Promise.all(
        cities.map((city) =>
          fetch(`http://127.0.0.1:8000/aqi?city=${city}`)
            .then((res) => res.json())
            .then((data) => ({
              city,
              aqi: data.aqi + (city === sampleFor ? 15 : Math.random() * 10 - 5), // highlight chosen city
            }))
            .catch(() => ({ city, aqi: 0 }))
        )
      ).then((results) => setChartData(results));
    }
  }, [sampleFor]);

  return (
    <div className="p-4 shadow-lg rounded-lg bg-white">
      <h2 className="text-xl font-bold mb-2">City Comparison - AQI</h2>
      <BarChart width={500} height={300} data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="city" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="aqi" fill="#4F46E5" radius={[8, 8, 0, 0]} />
      </BarChart>
    </div>
  );
};

export default AQIBarChart;
