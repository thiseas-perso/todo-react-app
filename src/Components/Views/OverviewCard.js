import React from "react";
import "./OverviewCard.css";

const OverviewCard = (props) => {
  let options = {
    // weekday: "short",
    month: "short",
    day: "2-digit",
  };

  return (
    <div className="overview-card">
      <h3>{props.title}</h3>
      {props.todos.length === 0 && <p>Nothing here yet!</p>}
      {props.todos.length > 0 &&
        props.todos.slice(0, 3).map((todo) => (
          <div key={todo.id} className={"card-details"}>
            <p>{todo.title}</p>
            <p className="date">{todo.date.toLocaleString("en-US", options)}</p>
          </div>
        ))}
    </div>
  );
};

export default OverviewCard;
