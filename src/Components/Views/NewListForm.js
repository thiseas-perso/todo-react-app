import React, { useContext, useState } from "react";
import { DashboardContext } from "../../store/dashboard-context";
import { v4 as uuid } from "uuid";

const NewListForm = () => {
  const { addListHandler, setOpenModal, setIsActiveListHandler } =
    useContext(DashboardContext);
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
