import Navbar from "./Navbar";
import MainDisplay from "./MainDisplay";

import "./Dashboard.css";
import DashboardContextProvider from "../store/dashboard-context";

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
