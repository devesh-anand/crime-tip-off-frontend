import React from "react";
import {
  Chart as ChartJS,
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  CategoryScale,
  BarElement,
  PointElement,
  LineElement,
  Legend,
  Tooltip
);

const labels = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export const data = {
  labels,
  datasets: [
    {
      type: "line",
      label: "Theft",
      borderColor: "rgb(255, 99, 132)",
      borderWidth: 2,
      fill: false,
      data: [10, 12, 15, 12, 12, 11, 13, 15, 7, 5, 8, 11],
    },
    {
      type: "line",
      label: "Bulling",
      borderColor: "rgb(75, 192, 192)",
      data: [10, 2, 3, 4, 7, 7, 8, 10, 9, 9, 7, 11],
      //   borderColor: "white",
      fill: false,

      borderWidth: 2,
    },
    {
      type: "line",
      label: "Child Labour",
      borderColor: "rgb(53, 162, 235)",
      //   data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
      data: [4, 4, 0, 1, 2, 4, 4, 3, 2, 7, 6, 6],
    },
  ],
};

const MultipleLineChart = () => {
  return (
    <div>
      Crime Chart of Year 2021
      <Chart type="bar" data={data} />
    </div>
  );
};

export default MultipleLineChart;
