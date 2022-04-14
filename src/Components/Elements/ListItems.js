import React, { useState } from "react";
import "./ListItems.css";

import ListItem from "./ListItem";

const ListItems = (props) => {
  const [inputValue, setInputValue] = useState("");

  const titleChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const handleItemChange = (itemId) => {
    props.handleItemChange(itemId);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    if (inputValue.length) {
      const newItem = {
        title: inputValue,
        id: Math.random(),
        todos: [],
      };
      props.onAddNewList(newItem);
      props.handleItemChange(newItem.id);
    }
    setInputValue("");
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
      <form onSubmit={submitHandler}>
        <input
          value={inputValue}
          id="add-new-list"
          maxLength={15}
          placeholder="Add New List"
          onChange={titleChangeHandler}
          required
        />
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default ListItems;
