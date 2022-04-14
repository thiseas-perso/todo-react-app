import React from "react";
import OverviewCard from "./OverviewCard";

import "./ViewOverview.css";
const ViewOverview = (props) => {
  return (
    <div id="main-display-overview">
      {props.items.map((item) => (
        <OverviewCard key={item.id} title={item.title} todos={item.todos} />
      ))}
    </div>
  );
};

export default ViewOverview;
