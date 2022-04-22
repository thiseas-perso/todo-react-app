import Navbar from "./Navbar";
import MainDisplay from "./MainDisplay";

import "./Dashboard.css";
import DashboardContextProvider from "../store/dashboard-context";
// import { useState } from "react";

const Dashboard = () => {
  return (
    <div id="dashboard">
      <DashboardContextProvider>
        <Navbar />
        <MainDisplay />
      </DashboardContextProvider>
    </div>
  );
};

export default Dashboard;
