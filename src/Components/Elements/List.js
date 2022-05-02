import React from "react";

const List = (props) => {
  const clickHandler = () => {
    props.setIsActiveListHandler(props.id);
  };

  return (
    <li
      id={props.id}
      onClick={clickHandler}
      className={`nav-sub-item ${
        props.isActiveList === props.id ? "active" : "not-active"
      }`}
    >
      {props.title}
    </li>
  );
};

export default List;
