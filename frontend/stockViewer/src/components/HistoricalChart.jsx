import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";

export default function HistoricalChart({ dataset }) {
  const chartRef = useRef(null);
  console.log(dataset);
  useEffect(() => {
    const ctx = chartRef.current.getContext("2d");
    const chart = new Chart(ctx, {
      type: "line",
      data: {
        labels: dataset.map((data) => data.date),
        datasets: [
          {
            label: "Stock Price",
            data: dataset.map((data) => data.close),
            borderColor: "rgba(75, 192, 192, 1)",
            backgroundColor: "rgba(255, 255, 255, 0)",
            fill: false,
          },
        ],
      },
      options: {
        scales: {
          x: {
            type: "time",
            time: {
              unit: "day",
            },
            grid: {
              display: true,
              color: "rgba(255,255,255,0.2)",
              borderWidth: 1,
              borderColor: "rgba(54, 162, 235, 0.5)",
              borderDash: [], // No dash pattern for y axis grid lines
            },
          },
          y: {
            beginAtZero: false,
            grid: {
              display: true,
              color: "rgba(255,255,255,0.2)",
              borderWidth: 1,
              borderColor: "rgba(54, 162, 235, 0.5)",
              borderDash: [], // No dash pattern for y axis grid lines
            },
          },
        },
      },
    });
    return () => {
      chart.destroy();
    };
  }, [dataset]);

  return <canvas ref={chartRef} />;
}
