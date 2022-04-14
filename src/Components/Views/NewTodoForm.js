import { useState } from "react";

const NewTodoForm = (props) => {
  const [titleInput, setTitleInput] = useState("");
  const [dateInput, setDateInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: titleInput,
      date: dateInput,
      id: Math.random(),
      parentListId: props.parentList.id,
    };
    props.onSubmit(newTodo);
    setDateInput("");
    setTitleInput("");
  };

  const titleChangeHandler = (e) => {
    setTitleInput(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDateInput(e.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        onChange={titleChangeHandler}
        value={titleInput}
      />
      <label htmlFor="title">Date</label>
      <input
        id="date"
        type="date"
        onChange={dateChangeHandler}
        value={dateInput}
      />
      <button>Submit</button>
    </form>
  );
};

export default NewTodoForm;
