import React, { useState } from "react";
import "./ListItems.css";
import NewListForm from "../Views/NewListForm";
import ListItem from "./ListItem";

const ListItems = (props) => {
  const handleItemChange = (itemId) => {
    props.handleItemChange(itemId);
  };

  const [clicked, setClicked] = useState(false);

  const clickHandler = () => {
    props.setOpenModal(!props.openModal);
  };

  const addNewListHandler = (newList) => {
    setClicked(!clicked);
    props.onAddNewList(newList);
    props.handleItemChange(newList.id);
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
      <button onClick={clickHandler}>Add New List</button>
    </div>
  );
};

export default ListItems;
