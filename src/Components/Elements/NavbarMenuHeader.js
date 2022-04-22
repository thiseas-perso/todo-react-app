import React, { useContext } from "react";
import "./NavbarItem.css";
import { DashboardContext } from "../../store/dashboard-context";

const NavbarMenuHeader = (props) => {
  const ctx = useContext(DashboardContext);
  const clickHandler = () => {
    props.onClick(props.title);
  };

  return (
    <div
      className={`nav-item ${
        ctx.display === props.title ? "active" : "not-active"
      }`}
      onClick={clickHandler}
    >
      <img src={props.img} alt="" />
      <h2 className="nav-title">{props.title}</h2>
    </div>
  );
};

export default NavbarMenuHeader;
