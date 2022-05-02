import React, { useState } from "react";

import { v4 as uuid } from "uuid";

const NewListForm = ({
  addListHandler,
  setOpenModal,
  setIsActiveListHandler,
}) => {
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      setOpenModal((prev) => !prev);
      let id = uuid();
      addListHandler({
        title,
        id,
        todos: [],
      });
      // setIsActiveListHandler(id);
    }
    setTitle("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={title}
        id="add-new-list"
        maxLength={15}
        placeholder="Add New List"
        onChange={(e) => setTitle(e.target.value)}
        required
        autoFocus
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewListForm;
