import { useState, useEffect, useRef } from "react";
import "./NewTodoForm.css";

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

  const { onClickOutside } = props;
  const ref = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  if (!props.show) return null;

  return (
    <div ref={ref} id="new-todo-form-ctn">
      <p id="parent-list-title">Adding to: {props.parentList.title}</p>
      <form id="new-todo-form" onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandler}
          value={titleInput}
          required
        />
        <label htmlFor="title">Date</label>
        <input
          id="date"
          type="date"
          onChange={dateChangeHandler}
          value={dateInput}
          required
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
