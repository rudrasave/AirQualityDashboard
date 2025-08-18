import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet.heat";
import L from "leaflet";

export default function AQIHeatmap() {
  const [points, setPoints] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/aqi_map") // new backend route
      .then((res) => res.json())
      .then((data) => {
        // Convert to [lat, lon, intensity] format for leaflet.heat
        const heatData = data.map((d) => [d.lat, d.lon, d.aqi / 200]); 
        setPoints(heatData);
      })
      .catch((err) => console.error("Error fetching heatmap:", err));
  }, []);

  return (
    <div className="bg-white rounded shadow p-4 h-96">
      <h2 className="text-lg font-bold mb-2">AQI Heatmap</h2>
      <MapContainer
        center={[20.5937, 78.9629]} // India center
        zoom={5}
        className="h-full w-full rounded"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; OpenStreetMap contributors"
        />
      </MapContainer>
    </div>
  );
}
