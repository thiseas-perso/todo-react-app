import React, { useState } from "react";
import "./ListItems.css";

import ListItem from "./ListItem";

const ListItems = (props) => {
  const [inputValue, setInputValue] = useState("");

  const titleChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const [isItemActive, setIsItemActive] = useState(props.items[0].id || null);

  const handleItemChange = (itemId) => {
    setIsItemActive(itemId);
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
      setIsItemActive(newItem.id);
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
            isItemActive={isItemActive}
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
