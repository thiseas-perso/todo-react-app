import React, { useState } from "react";
import "./NavbarItem.css";

const NavbarItem = (props) => {
  const clickHandler = () => {
    props.handleChange(props.title);
  };

  return (
    <div
      className={`nav-item ${
        props.isActive === props.title ? "active" : "not-active"
      }`}
      onClick={clickHandler}
    >
      <img src={props.img} alt="" />
      <h2>{props.title}</h2>
    </div>
  );
};

export default NavbarItem;
