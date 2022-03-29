import React, { useEffect, useState } from "react";
import DashboardTable from "../components/DashboardTable";
import MultipleLineChart from "../components/MultipleLineChart";
import PieChart from "../components/PieChart";
import Heatmap from "./Heatmap";

const PoliceDashboard = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <DashboardTable />
      <div class="mb-6">
        <select
          className="form-control block  px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-orange-600 focus:outline-none"
          id="category"
          name="category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="kidnapping">Kidnapping</option>
          <option value="laundering">Money Laundering</option>
          <option value="theft">Theft</option>
          <option value="others">Others</option>
        </select>
      </div>
      <div class="max-w-lg  m-4">
        <Heatmap heatmapDataPosition={heatmapDataPositionState} />
      </div>
      <div class="max-w-sm  m-4">
        <PieChart />
      </div>
      <div class="max-w-sm  m-4">
        <MultipleLineChart />
      </div>
    </div>
  );
};

export default PoliceDashboard;
