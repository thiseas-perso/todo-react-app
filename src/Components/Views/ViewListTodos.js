import React, { useState } from "react";
import "./ViewListTodos.css";
import ListCardCtn from "./ListCardCtn";

const ViewListTodos = (props) => {
  // find selected list in props.items // looking for id
  const filteredList = props.items.find(
    (item) => item.id === props.isItemActive
  );
  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };
  return (
    <ListCardCtn>
      <div className="list-card">
        <h1>{filteredList.title}</h1>
        {filteredList.todos.map((todo) => (
          <div key={todo.id} className="list-card-line">
            <p>{todo.title}</p>
            <p>{todo.date.toLocaleString("en-US", options)}</p>
          </div>
        ))}
      </div>
    </ListCardCtn>
  );
};

export default ViewListTodos;
