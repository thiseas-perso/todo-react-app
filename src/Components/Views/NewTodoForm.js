import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuid } from "uuid";

import { addNewTodo } from "../../store/lists-slice";

import "./NewTodoForm.css";

const NewTodoForm = (props) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [addTodoStatus, setAddTodoStatus] = useState("idle");

  const canSubmit =
    [title.trim(), date].every(Boolean) && addTodoStatus === "idle";
  const submitHandler = (e) => {
    e.preventDefault();

    if (canSubmit) {
      try {
        setAddTodoStatus("pending");
        const id = uuid();
        const parentListId = props.parentList.id;

        dispatch(
          addNewTodo({
            title,
            id,
            parentListId,
            date: new Date(date).toISOString(),
            completed: false,
            priority: 0,
          })
        );
        setDate("");
        setTitle("");
        props.display();
      } catch (err) {
        console.log(err);
      } finally {
        setAddTodoStatus("idle");
      }
    }
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

  // const newdate = new Date();
  // const defaultValue = newdate.toLocaleDateString("en-CA");

  return (
    <div ref={ref} id="new-todo-form-ctn">
      <p id="parent-list-title">Adding to: {props.parentList.title}</p>
      <form id="new-todo-form" onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label htmlFor="title">Date</label>
        <input
          id="date"
          type="date"
          required
          onChange={(e) => setDate(e.target.value)}
        />
        <button disabled={!canSubmit}>Submit</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
