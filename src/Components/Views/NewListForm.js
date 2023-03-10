import { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { addNewList } from "../../store/lists-slice";

const NewListForm = ({ setOpenModal, setIsActiveListHandler }) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (title.trim().length > 0) {
      const id = uuid();
      dispatch(addNewList({ title, id, todos: [] }));

      setOpenModal((prev) => !prev);
      setIsActiveListHandler(id);
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
