import React, { useContext } from "react";
import OverviewCard from "./OverviewCard";

import { DashboardContext } from "../../store/dashboard-context";
import "./ViewOverview.css";
const ViewOverview = () => {
  const ctx = useContext(DashboardContext);
  return (
    <div id="main-display-overview">
      {ctx.lists.map((list) => (
        <OverviewCard key={list.id} title={list.title} todos={list.todos} />
      ))}
    </div>
  );
};

export default ViewOverview;
