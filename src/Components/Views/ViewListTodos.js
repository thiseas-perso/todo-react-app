import React, { useState } from "react";
import "./ViewListTodos.css";
import ListCardCtn from "./ListCardCtn";
import NewTodoForm from "./NewTodoForm";

const ViewListTodos = (props) => {
  // find selected list in props.items // looking for id
  const foundList = props.items.find((item) => item.id === props.isItemActive);

  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };

  const submitHandler = (newTodo) => {
    setClicked(!clicked);
    props.onAddNewTodo(newTodo);
  };

  return (
    <ListCardCtn clicked={clicked}>
      {!clicked && (
        <div className="list-card">
          <h1>{foundList.title}</h1>
          {foundList.todos.map((todo) => (
            <div key={todo.id} className="list-card-line">
              <p>{todo.title}</p>
              <p>{todo.date.toLocaleString("en-US", options)}</p>
            </div>
          ))}
          <button onClick={clickHandler}>Add New Todo</button>
        </div>
      )}
      {clicked && (
        <NewTodoForm parentList={foundList} onSubmit={submitHandler} />
      )}
    </ListCardCtn>
  );
};

export default ViewListTodos;
