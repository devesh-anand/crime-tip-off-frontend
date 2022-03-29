import React, { useEffect, useState } from "react";
import Heatmap from "./Heatmap";

const HeatmapDashboard = () => {
  const heatmapDataPosition = [
    { lat: 28.6786794810425, lng: 77.26151170601337 },
    { lat: 28.677718522771112, lng: 77.26122447557762 },
    { lat: 28.67788158809669, lng: 77.25997174564884 },
    { lat: 28.678743875418736, lng: 77.26281848813903 },
    { lat: 28.680277544245573, lng: 77.26069274000719 },
  ];
  const [heatmapDataPositionState, setHeatmapDataPositionState] =
    useState(heatmapDataPosition);
  const [category, setCategory] = useState("theft");

  useEffect(() => {
    if (category == "theft") {
      setHeatmapDataPositionState([
        { lat: 29.5454543541, lng: 76.54321321 },
        { lat: 29.1221321311, lng: 76.43413512 },
        { lat: 29.5465564642, lng: 76.54211212 },
        { lat: 29.5451312214, lng: 76.12489741 },
        { lat: 29.4354165676, lng: 76.65321323 },
      ]);
    } else if (category == "kidnapping") {
      setHeatmapDataPositionState([
        { lat: 27.435410425, lng: 75.5413233 },
        { lat: 27.5435318522, lng: 75.5343437762 },
        { lat: 27.4354458809, lng: 75.65432664884 },
        { lat: 27.9868643875, lng: 75.324148814 },
        { lat: 27.5313554424, lng: 75.5313200719 },
      ]);
    } else if (category == "laundering") {
      setHeatmapDataPositionState([
        { lat: 28.4653410425, lng: 77.54656501337 },
        { lat: 28.8465318522771112, lng: 77.5653437762 },
        { lat: 28.5453458809669, lng: 77.7848664884 },
        { lat: 28.5435643875418736, lng: 77.1231348813903 },
        { lat: 28.54185544245573, lng: 77.54314000719 },
      ]);
    } else if (category == "others") {
      setHeatmapDataPositionState([
        { lat: 28.6786794810425, lng: 77.26151170601337 },
        { lat: 28.677718522771112, lng: 77.26122447557762 },
        { lat: 28.67788158809669, lng: 77.25997174564884 },
        { lat: 28.678743875418736, lng: 77.26281848813903 },
        { lat: 28.680277544245573, lng: 77.26069274000719 },
      ]);
    }
  }, [category]);

  return (
    <div>
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
    </div>
  );
};

export default HeatmapDashboard;
