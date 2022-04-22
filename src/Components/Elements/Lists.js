import React, { useContext } from "react";
import "./ListItems.css";

import { DashboardContext } from "../../store/dashboard-context";
import List from "./List";

const Lists = () => {
  const ctx = useContext(DashboardContext);

  return (
    <div className="list-ctn">
      <ul>
        {ctx.lists.map((list) => (
          <List key={list.id} id={list.id} title={list.title} />
        ))}
      </ul>
      <button onClick={ctx.addNewListHandler}>Add New List</button>
    </div>
  );
};

export default Lists;
