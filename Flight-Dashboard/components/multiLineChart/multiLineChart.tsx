import React from 'react';
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
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  plugins: {
    title: {
      display: true,
      text: 'Real-Time Environmental Data',
    },
  },
  scales: {
    y: {
      type: 'linear',
      display: true,
      position: 'left',
      title: {
        display: true,
        text: 'Temperature (°C) & Wind Velocity (km/h)'
      }
    },
    y1: {
      type: 'linear',
      display: true,
      position: 'right',
      grid: {
        drawOnChartArea: false,
      },
      title: {
        display: true,
        text: 'Precipitation (mm) & Atmospheric Pressure (hPa)'
      }
    },
  },
};

export function MultiLineChart({ graphData }) {
  const data = {
    labels: graphData.map((_, index) => `${index}s`),
    datasets: [
      {
        label: 'Temperature (°C)',
        data: graphData.map(data => data.temperature),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Wind Velocity (km/h)',
        data: graphData.map(data => data.windVelocity),
        borderColor: 'rgb(54, 162, 235)',
        backgroundColor: 'rgba(54, 162, 235, 0.5)',
        yAxisID: 'y',
      },
      {
        label: 'Precipitation (mm)',
        data: graphData.map(data => data.precipitation),
        borderColor: 'rgb(75, 192, 192)',
        backgroundColor: 'rgba(75, 192, 192, 0.5)',
        yAxisID: 'y1',
      },
      {
        label: 'Atmospheric Pressure (hPa)',
        data: graphData.map(data => data.pressure),
        borderColor: 'rgb(153, 102, 255)',
        backgroundColor: 'rgba(153, 102, 255, 0.5)',
        yAxisID: 'y1',
      },
    ],
  };

  return <Line options={options} data={data} />;
}
