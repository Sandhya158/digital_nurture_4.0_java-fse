// src/App.js
import React from 'react';
import CohortDetails from './components/CohortDetails';

function App() {
  const cohorts = [
    { name: "React Bootcamp", status: "ongoing", startDate: "2025-07-01", endDate: "2025-08-01" },
    { name: "NodeJS Basics", status: "completed", startDate: "2025-05-01", endDate: "2025-06-01" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>MyAcademy Dashboard</h1>
      {cohorts.map((cohort, index) => (
        <CohortDetails key={index} cohort={cohort} />
      ))}
    </div>
  );
}

export default App;
