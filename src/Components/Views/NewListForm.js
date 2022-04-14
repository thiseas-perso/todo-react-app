import React, { useState } from "react";

const NewListForm = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length) {
      const newItem = {
        title: inputValue,
        id: Math.random(),
        todos: [],
      };
      props.onAddNewList(newItem);
      // props.handleItemChange(newItem.id);
    }
    setInputValue("");
  };

  const titleChangeHandler = (e) => {
    setInputValue(e.target.value);
  };

  const [inputValue, setInputValue] = useState("");

  return (
    <form onSubmit={submitHandler}>
      <input
        value={inputValue}
        id="add-new-list"
        maxLength={15}
        placeholder="Add New List"
        onChange={titleChangeHandler}
        required
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewListForm;
