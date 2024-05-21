import React from "react";
import ReactEcharts from "echarts-for-react";

function BarChart() {
  const option = {
    legend: {
      top: "5%",
      left: "center",
    },
    dataset: {
      source: [["product", "2015", "2016", "2017"]],
    },
    tooltip: { show: true },

    // axisPointer: [{ show: true }],
    color: [" rgba(255, 142, 94, 1)", " rgba(82, 227, 14, 1)"],

    xAxis: {
      type: "category",
      data: [
        "January",
        "Feb",
        "March",
        "Thu",
        "April",
        "May",
        "Jun",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [120, 250, 150, 80, 70, 110, 130, 20, 30, 40, 90, 89, 99],
        type: "bar",
      },
      {
        data: [180, 200, 150, 80, 70, 110, 130, 80, 90, 77, 88, 77, 89],
        type: "bar",
      },
    ],
  };

  return (
    <div>
      <ReactEcharts option={option} />
    </div>
  );
}

export default BarChart;
