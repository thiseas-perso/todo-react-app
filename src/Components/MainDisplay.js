import React from "react";
import { useSelector } from "react-redux";

import "./MainDisplay.css";
import ViewOverview from "./Views/ViewOverview";
import ViewListTodos from "./Views/ViewListTodos";
import Modal from "./Layouts/Modal";
import NewListForm from "./Views/NewListForm";

const MainDisplay = ({
  openModal,
  display,
  setOpenModal,
  isActiveList,
  setIsActiveListHandler,
}) => {
  const lists = useSelector((state) => state.lists);
  return (
    <div id="main-display">
      {openModal && (
        <Modal onClickOutside={() => setOpenModal(!openModal)}>
          <NewListForm />
        </Modal>
      )}
      {display === "Overview" && lists.length > 0 && <ViewOverview />}
      {display === "Lists" && <ViewListTodos isActiveList={isActiveList} />}
    </div>
  );
};

export default MainDisplay;
