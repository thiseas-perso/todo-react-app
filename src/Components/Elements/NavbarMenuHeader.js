import React from "react";
import "./NavbarItem.css";

const NavbarMenuHeader = ({ display, title, img, onClick }) => {
  const clickHandler = () => {
    onClick(title);
  };

  return (
    <div
      className={`nav-item ${display === title ? "active" : "not-active"}`}
      onClick={clickHandler}
    >
      <img src={img} alt="" />
      <h2 className="nav-title">{title}</h2>
    </div>
  );
};

export default NavbarMenuHeader;
