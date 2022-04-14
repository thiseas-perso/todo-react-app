import React, { useState } from "react";
import "./ViewListTodos.css";
import ListCardCtn from "./ListCardCtn";
import NewTodoForm from "./NewTodoForm";
import images from "../../Assets";

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
        <React.Fragment>
          <h1>{foundList.title}</h1>
          <div className="list-card">
            {foundList.todos.map((todo) => (
              <div key={todo.id} className="list-card-line">
                <p>{todo.title}</p>
                <p className="date">
                  {todo.date
                    .toLocaleString("en-US", options)
                    .replace(/,/g, " ")}
                </p>
              </div>
            ))}
          </div>

          <span
            className="material-icons"
            onClick={clickHandler}
            id="new-todo-btn"
          >
            add_circle
          </span>
        </React.Fragment>
      )}
      {clicked && (
        <NewTodoForm parentList={foundList} onSubmit={submitHandler} />
      )}
    </ListCardCtn>
  );
};

export default ViewListTodos;
