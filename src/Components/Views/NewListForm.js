import React, { useContext, useState } from "react";
import { DashboardContext } from "../../store/dashboard-context";
import { v4 as uuid } from "uuid";

const NewListForm = () => {
  const { listsDispatch } = useContext(DashboardContext);
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      listsDispatch({
        type: "ADD_LIST",
        list: {
          title,
          id: uuid(),
          todos: [],
        },
      });
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
