import React, { useEffect, useState } from "react";
import Heatmap from "./Heatmap";

import postitions from "../data/fake_lat_lng";
import lat_lng_1 from "../data/lat_lng_1";
import lat_lng_2 from "../data/lat_lng_2";
import lat_lng_3 from "../data/lat_lng_3";
import lat_lng_4 from "../data/lat_lng_4";

const HeatmapDashboard = () => {
  // const heatmapDataPosition = [
  //   { lat: 28.6786794810425, lng: 77.26151170601337 },
  //   { lat: 28.677718522771112, lng: 77.26122447557762 },
  //   { lat: 28.67788158809669, lng: 77.25997174564884 },
  //   { lat: 28.678743875418736, lng: 77.26281848813903 },
  //   { lat: 28.680277544245573, lng: 77.26069274000719 },
  // ];

  console.log("lat , long");
  console.log(postitions);
  const heatmapDataPosition = postitions;
  const [heatmapDataPositionState, setHeatmapDataPositionState] =
    useState(postitions);
  const [category, setCategory] = useState("theft");

  useEffect(() => {
    if (category == "theft") {
      setHeatmapDataPositionState(postitions);
    } else if (category == "kidnapping") {
      setHeatmapDataPositionState(lat_lng_1);
    } else if (category == "laundering") {
      setHeatmapDataPositionState(lat_lng_2);
    } else if (category == "others") {
      setHeatmapDataPositionState(lat_lng_3);
    }
  }, [category]);

  return (
    <div>
      <div class="mb-6 w-full flex justify-center items-center mt-4">
        <div>Group by: &nbsp;</div>
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
      <div class="w-4xl h-5/6 mx-auto m-4">
        <Heatmap heatmapDataPosition={heatmapDataPositionState} />
      </div>
    </div>
  );
};

export default HeatmapDashboard;
