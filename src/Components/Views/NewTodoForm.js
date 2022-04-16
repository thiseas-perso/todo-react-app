import { useState, useRef } from "react";
import "./NewTodoForm.css";

const NewTodoForm = (props) => {
  //destructure props here
  // const [titleInput, setTitleInput] = useState("");
  // const [dateInput, setDateInput] = useState("");

  const titleInputRef = useRef();
  const dateInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const enteredInput = titleInputRef.current.value; // Refs should only be used for **reading** values
    const enteredDate = dateInputRef.current.value; // Refs should only be used for **reading** values
    if (enteredInput.trim().length < 1) {
      return;
    }
    const newTodo = {
      title: enteredInput.trim(),
      date: enteredDate,
      id: Math.random(), //use uuid for random IDs
      parentListId: props.parentList.id,
    };
    props.onSubmit(newTodo);
    titleInputRef.current.value = ""; //  Refs should only be used for **reading** values
    dateInputRef.current.value = ""; // exceptionally here it's okay since we are NOT manipulating the DOM
    // setDateInput("");
    // setTitleInput("");
  };

  /*   const titleChangeHandler = (e) => {
    setTitleInput(e.target.value);
  };
  const dateChangeHandler = (e) => {
    setDateInput(e.target.value);
  }; */

  return (
    <div id="new-todo-form-ctn">
      <p id="parent-list-title">Adding to: {props.parentList.title}</p>
      <form id="new-todo-form" onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          // onChange={titleChangeHandler}
          // value={titleInput}
          required
          ref={titleInputRef}
        />
        <label htmlFor="title">Date</label>
        <input
          id="date"
          type="date"
          // onChange={dateChangeHandler} //onChange={(e)=>setDateInput(e.target.value)}
          // value={dateInput}
          required
          ref={dateInputRef}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
