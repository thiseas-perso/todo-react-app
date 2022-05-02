import React, { useState } from "react";
import { useSelector } from "react-redux";

import "./ViewListTodos.css";
import ListCardCtn from "./ListCardCtn";
import NewTodoForm from "./NewTodoForm";

const ViewListTodos = ({ isActiveList }) => {
  const lists = useSelector((state) => state.lists);
  const activeList = lists.find((list) => list.id === isActiveList);

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
      {!clicked && activeList && (
        <>
          <h1>{activeList.title}</h1>
          <div className="list-card">
            {activeList.todos.map((todo) => (
              <div key={todo.id} className="list-card-line">
                <p>{todo.title}</p>
                <p className="date">
                  {todo.date.toLocaleString("en-US", options)}
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
      {clicked && activeList && (
        <NewTodoForm
          display={clickHandler}
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
