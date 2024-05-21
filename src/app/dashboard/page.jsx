"use client";
import React from "react";
import DashCard from "../../../components/Dashboard/DashCard";
import BarChart from "../../../components/Dashboard/BarChart";

import styles from "./dashboard.module.css";
import { Select } from "antd";

const Dashboard = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };

  return (
    <div className="" style={{ minWidth: "80vw" }}>
      <div className="flex justify-between flex-wrap">
        <DashCard
          config={{
            backColor: "rgba(246, 219, 219, 1)",
            textColor: "rgba(255, 95, 95, 1)",
          }}
        />
        <DashCard
          config={{
            backColor: " rgba(224, 246, 219, 1)",
            textColor: " rgba(33, 223, 16, 1)  ",
          }}
        />
        <DashCard
          config={{
            backColor: " rgba(246, 235, 219, 1)",
            textColor: " rgba(228, 151, 0, 1) ",
          }}
        />
      </div>
      <div className={styles.bar_chart_container}>
        <div className="flex justify-between">
          <p>Yearly Account Analysis</p>
          <Select
            defaultValue="2024"
            style={{
              width: 120,
            }}
            onChange={handleChange}
            options={[
              {
                value: "2024",
                label: "2024",
              },
              {
                value: "2023",
                label: "2023",
              },
              {
                value: "2022",
                label: "2022",
              },
            ]}
          />
        </div>
        <BarChart />
      </div>
    </div>
  );
};
export default Dashboard;
