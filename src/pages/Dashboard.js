import React from "react";
import DashboardTable from "../components/DashboardTable";
import PieChart from "../components/PieChart";
import Heatmap from "./Heatmap";

const Dashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardTable />
      <div class="max-w-lg  m-4">
        <Heatmap />
      </div>
      <div class="max-w-sm  m-4">
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
