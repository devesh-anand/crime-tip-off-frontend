import React, { useState } from "react";
import MultipleLineChart from "../components/MultipleLineChart";
import PieChart from "../components/PieChart";
import ReportTables from "../components/ReportTables";
import Heatmap from "./Heatmap";
import HeatmapDashboard from "./HeatmapDashboard";

function Dashboard() {
  const [activeTab, setActiveTab] = useState(<ReportTables />);

  return (
    <div className="flex h-screen w-screen">
      <div className="w-1/5 h-screen bg-zinc-800 text-white text-xl flex flex-col items-center gap-5">
        <img
          className="rounded-full w-40 h-40 mt-20"
          src="https://5.imimg.com/data5/IK/YB/MY-6421749/sample-satyamev-jayate-500x500.jpg"
        />
        <div className="text-2xl text-orange-300 font-semibold mb-20">
          Admin
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setActiveTab(<ReportTables />)}
        >
          Reports
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setActiveTab(<HeatmapDashboard />)}
        >
          Heatmap
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setActiveTab(<MultipleLineChart />)}
        >
          Line Chart
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setActiveTab(<PieChart />)}
        >
          Pie Chart
        </div>
      </div>
      <div className="w-4/5 h-screen">
        {activeTab}
        {/* <Heatmap /> */}
      </div>
    </div>
  );
}

export default Dashboard;
