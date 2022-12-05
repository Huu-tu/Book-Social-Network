import React, {useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  ArcElement ,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  ArcElement ,
  Title,
  Tooltip,
  Legend
);

export default function PieChart(){
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: ["John", "Kevin", "Geroge", "Micheal", "Oreo"],
      datasets: [
        {
          label: "Xanh",
          data: [10, 30, 40, 20, 70],
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: [
            "rgba(53, 162, 235, 0.4)",
            "rgb(252, 8, 110)",
            "rgb(86, 8, 110)",
            "rgb(86, 8, 43)",
            "rgb(22, 8, 43)"
          ],
        },
        // {
        //   label: "Do ",
        //   data: [2, 50, 30, 100, 600],
        //   borderColor: "rgb(53, 162, 235)",
        //   backgroundColor: "red",
        // },
      ],
    });
    setChartOptions({
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "right",
        },
        title: {
          display: true,
          // text: "Whom'st let the dogs out",
        },
      },
    });
  }, []);


  return(
    <div style={{height: "250px"}}>
      <Pie options={chartOptions} data={chartData} />
    </div>
  )
}