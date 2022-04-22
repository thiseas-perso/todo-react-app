import React, { useContext } from "react";

import { DashboardContext } from "../../store/dashboard-context";

const List = (props) => {
  const ctx = useContext(DashboardContext);
  const clickHandler = () => {
    ctx.setIsActiveListHandler(props.id);
  };

  return (
    <li
      id={props.id}
      onClick={clickHandler}
      className={`nav-sub-item ${
        ctx.isActiveList === props.id ? "active" : "not-active"
      }`}
    >
      {props.title}
    </li>
  );
};

export default List;
