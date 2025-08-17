import React, { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from "chart.js";
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

const cities = ["Delhi","Mumbai","Bengaluru","Kolkata","Chennai","Hyderabad"];

export default function AQIBarChart({ sampleFor }) {
  const [dataset, setDataset] = useState({ labels: [], data: [] });

  useEffect(() => {
    // create mock AQI numbers for cities (deterministic-ish)
    const labels = cities;
    const data = labels.map((c, idx) => {
      const base = 60 + (idx * 20);
      // nudge Delhi higher
      return c === sampleFor ? base + 40 : base + Math.floor(Math.random() * 60);
    });
    setDataset({ labels, data });
  }, [sampleFor]);

  const data = {
    labels: dataset.labels,
    datasets: [
      {
        label: "AQI",
        data: dataset.data,
        borderRadius: 6,
      },
    ],
  };

  const options = {
    plugins: { legend: { display: false } },
    responsive: true,
    scales: { y: { beginAtZero: true } },
  };

  return (
    <div className="bg-white rounded shadow p-4">
      <h3 className="font-semibold mb-2">City Comparison (AQI)</h3>
      <Bar data={data} options={options} />
    </div>
  );
}
