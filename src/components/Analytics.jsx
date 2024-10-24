import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { CSVLink } from 'react-csv';

// Register the necessary components for Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const generateRandomData = (count, min, max) => {
  const data = [];
  for (let i = 0; i < count; i++) {
    const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
    data.push(randomValue);
  }
  return data;
};

const generateLabels = (count) => {
  const labels = [];
  for (let i = 1; i <= count; i++) {
    labels.push(`Day ${i}`);
  }
  return labels;
};

const Analytics = () => {
  const [dataPoints] = useState(generateRandomData(200, 30, 100)); 
  const labels = generateLabels(10); 

  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Performance',
        data: dataPoints,
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
      },
    ],
  };

  // CSV Data
  const csvData = [
    ['Day', 'Performance'],
    ...labels.map((label, index) => [label, dataPoints[index]]),
  ];

  return (
    <div className="analytics-section">
      <h2>Analytics</h2>
      <Line data={data} />

      {/* CSV Download */}
      <CSVLink
        data={csvData}
        filename={"analytics-data.csv"}
        className="btn btn-download"
        target="_blank"
      >
        Download CSV
      </CSVLink>
    </div>
  );
};

export default Analytics;
