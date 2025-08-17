import React from "react";
import CitySelector from "../components/CitySelector";
import AQICard from "../components/AQICard";
import AQILineChart from "../components/AQILineChart";

export default function Home({ city, onCityChange, data, loading }) {
  return (
    <main className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
        <h1 className="text-2xl font-semibold">Welcome to Air Quality Dashboard</h1>
        <CitySelector value={city} onChange={onCityChange} />
      </div>

      <div className="mt-6 flex flex-wrap gap-6">
        <div>
          {loading ? (
            <div className="bg-white p-4 rounded shadow w-72">Loading...</div>
          ) : (
            <AQICard data={data?.current} />
          )}
        </div>

        <div className="flex-1 min-w-[300px]">
          <AQILineChart timeseries={data?.timeseries || []} />
        </div>
      </div>
    </main>
  );
}
