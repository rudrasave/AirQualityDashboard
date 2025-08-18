import React from "react";
import AQIBarChart from "../components/AQIBarChart";
import AQIHeatmap from "../components/AQIHeatmap";

export default function Analytics({ city, data }) {
  return (
    <main className="max-w-6xl mx-auto p-6 space-y-6">
      <h2 className="text-xl font-semibold">Analytics</h2>

      <section className="grid md:grid-cols-2 gap-6">
        <AQIBarChart sampleFor={city} />
        <AQIHeatmap city={city} />
      </section>
    </main>
  );
}
