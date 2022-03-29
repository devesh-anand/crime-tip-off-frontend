import React, { useState } from "react";
import DashboardTable from "../components/DashboardTable";
import MultipleLineChart from "../components/MultipleLineChart";
import PieChart from "../components/PieChart";
import ReportTables from "../components/ReportTables";
import Heatmap from "./Heatmap";
import HeatmapDashboard from "./HeatmapDashboard";
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from "../components/DashboardTable"; // new
import crimeData from "../data/crime_data_1.js";

const getData = () => {
  //   const data = [
  //     {
  //       name: "Jane Cooper",
  //       email: "jane.cooper@example.com",
  //       title: "Regional Paradigm Technician",
  //       department: "Optimization",
  //       status: "Active",
  //       role: "Admin",
  //       age: 27,
  //       imgUrl:
  //         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  //     },
  //     {
  //       name: "Kristin Watson",
  //       email: "kristin.watson@example.com",
  //       title: "Lean Implementation Liaison",
  //       department: "Mobility",
  //       status: "Inactive",
  //       role: "Admin",
  //       age: 36,
  //       imgUrl:
  //         "https://images.unsplash.com/photo-1532417344469-368f9ae6d187?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  //     },
  //     {
  //       name: "Cameron Williamson",
  //       email: "cameron.williamson@example.com",
  //       title: "Internal Applications Engineer",
  //       department: "Security",
  //       status: "Active",
  //       role: "Member",
  //       age: 24,
  //       imgUrl:
  //         "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60",
  //     },
  //   ];
  const data = crimeData;

  return [...data, ...data, ...data];
};

const data = crimeData;
console.log("data");
console.log(data);

function Dashboard() {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "email",
        Cell: AvatarCell,
        idAccessor: "id",
        firstNameAccessor: "first_name",
        lastNameAccessor: "last_name",
        genderAccessor: "gender",

        emailAccessor: "email",
      },
      // {
      //   Header: "Title",
      //   accessor: "title",
      // },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
      // {
      //   Header: "Age",
      //   accessor: "age",
      // },
      {
        Header: "category",
        accessor: "category",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
    ],
    []
  );

  const data = React.useMemo(() => getData(), []);

  const [activeTab, setActiveTab] = useState(
    <DashboardTable columns={columns} data={data} />
  );

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
          onClick={() =>
            setActiveTab(<DashboardTable columns={columns} data={data} />)
          }
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
