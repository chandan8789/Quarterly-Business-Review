// components/PerformanceGraph.js
import React from "react";
import { Line } from "react-chartjs-2";

const data = {
  labels: ["Week 1", "Week 2", "Week 3", "Week 4"],
  datasets: [
    {
      label: "Tasks Completed",
      data: [10, 15, 20, 25],
      borderColor: "rgba(75,192,192,1)",
      fill: false,
    },
    {
      label: "Tasks Pending",
      data: [5, 10, 8, 12],
      borderColor: "#742774",
      fill: false,
    },
  ],
};

const PerformanceGraph = () => {
  return (
    <div className="section">
      <h2>Performance Graph</h2>
      <Line data={data} />
    </div>
  );
};

export default PerformanceGraph;
