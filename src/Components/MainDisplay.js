import React, { useContext } from "react";

import "./MainDisplay.css";

import ViewOverview from "./Views/ViewOverview";
import ViewListTodos from "./Views/ViewListTodos";
import Modal from "./Layouts/Modal";
import NewListForm from "./Views/NewListForm";

import { DashboardContext } from "../store/dashboard-context";

const MainDisplay = () => {
  const ctx = useContext(DashboardContext);

  return (
    <div id="main-display">
      {ctx.openModal && (
        <Modal onClickOutside={() => ctx.setOpenModal(!ctx.openModal)}>
          <NewListForm />
        </Modal>
      )}
      {ctx.display === "Overview" && ctx.lists.length > 0 && <ViewOverview />}
      {ctx.display === "Lists" && <ViewListTodos />}
    </div>
  );
};

export default MainDisplay;
