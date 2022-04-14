import React from "react";
import "./Card.css";
const Card = (props) => {
  return (
    <div className="overview-card">
      <h3>{props.title}</h3>
      {props.todos.map((todo) => (
        <p key={todo.id}>{todo.title}</p>
      ))}
    </div>
  );
};

export default Card;
