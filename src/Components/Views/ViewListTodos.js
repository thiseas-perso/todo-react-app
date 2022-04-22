import React, { useState, useContext } from "react";
import "./ViewListTodos.css";
import ListCardCtn from "./ListCardCtn";
import NewTodoForm from "./NewTodoForm";

import { DashboardContext } from "../../store/dashboard-context";

const ViewListTodos = (props) => {
  const ctx = useContext(DashboardContext);
  // find selected list in props.items // looking for id
  const activeList = ctx.lists.find((list) => list.id === ctx.isActiveList);

  const options = {
    weekday: "short",
    month: "short",
    day: "2-digit",
    year: "numeric",
  };

  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked((prev) => !prev);
  };

  return (
    <ListCardCtn clicked={clicked}>
      {!clicked && (
        <>
          <h1>{activeList.title}</h1>
          <div className="list-card">
            {activeList.todos.map((todo) => (
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
        </>
      )}
      {clicked && (
        <NewTodoForm
          show={clicked}
          onClickOutside={() => {
            setClicked(false);
          }}
          parentList={activeList}
        />
      )}
    </ListCardCtn>
  );
};

export default ViewListTodos;
