import React, {useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Bar } from "react-chartjs-2";
import {useSelector} from 'react-redux';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export default function CmtBarChart(){
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
          backgroundColor: "rgba(53, 162, 235, 0.4)",
        },
        // {
        //   label: "Do ",
        //   data: [2, 50, 30, 60, 50],
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
          text: "Whom'st let the dogs out",
        },
      },
    });
  }, [posts]);


  return(
    <div style={{height: "300px"}}>
      <Bar options={chartOptions} data={chartData}/>
    </div>
  )
}