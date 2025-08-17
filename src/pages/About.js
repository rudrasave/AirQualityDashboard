import React from "react";

export default function About() {
  return (
    <main className="max-w-4xl mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">About this project</h2>
      <p className="text-gray-700 leading-relaxed">
        Real-Time Air Quality & Pollution Dashboard — built with React, Tailwind CSS and Chart.js.
        This demo uses mocked data for UI development. Backend integration will use public AQI APIs (IQAir / OpenAQ).
      </p>
    </main>
  );
}
