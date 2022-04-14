import "./MainDisplay.css";

import ViewOverview from "./Views/ViewOverview";
import ViewListTodos from "./Views/ViewListTodos";

const MainDisplay = (props) => {
  const addNewTodoHandler = (newTodo) => {
    props.onAddNewTodo(newTodo);
  };

  return (
    <div id="main-display">
      {props.display === "Overview" && <ViewOverview items={props.items} />}
      {props.display === "Lists" && (
        <ViewListTodos
          items={props.items}
          isItemActive={props.isItemActive}
          onAddNewTodo={addNewTodoHandler}
        />
      )}
    </div>
  );
};

export default MainDisplay;
