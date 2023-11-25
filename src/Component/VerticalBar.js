import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import { CategoryScale } from "chart.js";
import "../Styles/VerticalBar.css";
import { useEffect, useState } from "react";
import ConvertNumberToWord from "../utils/ConvertNumberToWord";
Chart.register(CategoryScale);

const options = {
  responsive: false,
  scales: {
    xAxes: [
      {
        gridLines: {
          display: false,
          drawBorder: false,
          borderDash: [3, 3],
          zeroLineColor: "blue",
          color: "rgba(0, 0, 0, 0)",
        },
        categoryPercentage: 0.7,
        barPercentage: 0.9,
        ticks: {
          beginAtZero: false,
        },
      },
    ],
    yAxes: [
      {
        display: true,
        gridLines: {
          display: false,
          zeroLineColor: "transparent",
          color: "rgba(0, 0, 0, 0)",
        },
        ticks: {
          beginAtZero: false,
          suggestedMin: 10000, // Set your desired minimum value
          suggestedMax: 2400000,
        },
      },
    ],
    x: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
      border: {
        display: false,
      },
      ticks: {
        display: true,
        suggestedMin: 20000, // Set your desired minimum value
        suggestedMax: 2400000,
        beginAtZero: false,
      },
    },
  },
};

function VerticalBar(props) {
  const [Bardata, setBardata] = useState({
    labels: [
      ["5 years", "12 L"],
      ["10 years", "20 L"],
      ["15 years", "30 L"],
      ["20 years", "40 L"],
    ],
    datasets: [
      {
        label: "Returns Of Investment ",
        data: [500, 100000, 200000, 2400000],
      },
    ],
  });

  useEffect(() => {
    if (props.selectedSIP.length > 0) {
      let Xaxislable = Bardata.labels.map((fact, index) => {
        let newarr = [];
        newarr.push(fact[0]);
        newarr.push(ConvertNumberToWord(props.selectedSIP[index]));
        return newarr;
      });
      setBardata({
        ...Bardata,
        labels: Xaxislable,
        datasets: [
          {
            ...Bardata.datasets[0],
            data: props.selectedSIP,
          },
        ],
      });
    }
  }, [props.selectedSIP]);

  return (
    <div className="bar-main-container">
      <Bar width="500" height="500" data={Bardata} options={options} />
    </div>
  );
}

export default VerticalBar;
