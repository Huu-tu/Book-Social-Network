import React, {useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {useSelector} from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function LineChart(){
  const posts = useSelector((state) =>state.post.value)
  const [chartData, setChartData] = useState({
    datasets: [],
  });

  const [chartOptions, setChartOptions] = useState({});

  useEffect(() => {
    setChartData({
      labels: posts.map(x => x.title),
      datasets: [
        {
          label: "Comment",
          data: posts.map(x => x.comments.length),
          borderColor: "rgb(53, 162, 235)",
          backgroundColor: [
            "rgba(53, 162, 235, 0.4)",
            "rgb(252, 8, 110)",
            "rgb(86, 8, 110)",
            "rgb(86, 8, 43)",
            "rgb(22, 8, 43)"
          ],
        }
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
          text: "Whom'st let the dogs out",
        },
      },
    });
  }, [posts]);


  return(
    <div style={{height: "300px"}}>
      <Line options={chartOptions} data={chartData} />
    </div>
  )
}