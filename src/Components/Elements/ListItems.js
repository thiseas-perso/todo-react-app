import React, { useState } from "react";
import "./ListItems.css";

import ListItem from "./ListItem";

const ListItems = (props) => {
  const handleItemChange = (itemId) => {
    props.handleItemChange(itemId);
  };

  const dispalaFormHandler = () => {
    props.setOpenModal(!props.openModal);
  };

  return (
    <div className="list-ctn">
      <ul>
        {props.items.map((item) => (
          <ListItem
            key={item.id}
            id={item.id}
            title={item.title}
            handleItemChange={handleItemChange}
            isItemActive={props.isItemActive}
          />
        ))}
      </ul>
      <button onClick={dispalaFormHandler}>Add New List</button>
    </div>
  );
};

export default ListItems;
