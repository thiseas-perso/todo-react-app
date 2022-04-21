import "./MainDisplay.css";

import ViewOverview from "./Views/ViewOverview";
import ViewListTodos from "./Views/ViewListTodos";
import Modal from "./Layouts/Modal";
import NewListForm from "./Views/NewListForm";

const MainDisplay = (props) => {
  const addNewTodoHandler = (newTodo) => {
    props.onAddNewTodo(newTodo);
  };

  return (
    <div id="main-display">
      {props.openModal && (
        <Modal
          openModal={props.openModal}
          onClickOutside={() => props.setOpenModal(false)}
        >
          <NewListForm onAddNewList={props.onAddNewList} />
        </Modal>
      )}
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
