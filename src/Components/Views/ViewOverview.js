import React from "react";
import Card from "./Card";
import "./ViewOverview.css";
const ViewOverview = (props) => {
  return (
    <div id="main-display-overview">
      {props.items.slice(0, 3).map((item) => (
        <Card key={item.id} title={item.title} todos={item.todos} />
      ))}
    </div>
  );
};

export default ViewOverview;
