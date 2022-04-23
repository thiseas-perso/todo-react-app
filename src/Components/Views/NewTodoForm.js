import { useEffect, useRef, useContext } from "react";
import { v4 as uuid } from "uuid";
import { DashboardContext } from "../../store/dashboard-context";
import "./NewTodoForm.css";

const NewTodoForm = (props) => {
  const { addTodoHandler } = useContext(DashboardContext);

  const titleInputRef = useRef();
  const dateInputRef = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    const title = titleInputRef.current.value;
    const date = dateInputRef.current.value;
    if (title.trim().length < 1) {
      return;
    }
    addTodoHandler({
      date: new Date(date),
      title: title.trim(),
      id: uuid(),
      parentListId: props.parentList.id,
    });
    titleInputRef.current.value = "";
    dateInputRef.current.value = "";
    props.display();
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

  const newdate = new Date();
  const defaultValue = newdate.toLocaleDateString("en-CA");

  return (
    <div ref={ref} id="new-todo-form-ctn">
      <p id="parent-list-title">Adding to: {props.parentList.title}</p>
      <form id="new-todo-form" onSubmit={submitHandler}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" required ref={titleInputRef} />
        <label htmlFor="title">Date</label>
        <input
          id="date"
          type="date"
          required
          ref={dateInputRef}
          defaultValue={defaultValue}
        />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default NewTodoForm;
