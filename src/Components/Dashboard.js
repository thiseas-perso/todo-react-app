import { useState } from "react";

import Navbar from "./Navbar";
import MainDisplay from "./MainDisplay";

import "./Dashboard.css";

const Dashboard = () => {
  const [openModal, setOpenModal] = useState(false);
  const [isActiveList, setIsActiveList] = useState("");
  const [display, setDisplay] = useState("Lists");

  const setDisplayHandler = (listTitle) => {
    setDisplay(listTitle);
  };

  const setIsActiveListHandler = (listId) => {
    setIsActiveList(listId);
  };

  const showNewListHandler = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <div id="dashboard">
      <Navbar
        setDisplayHandler={setDisplayHandler}
        display={display}
        setOpenModal={setOpenModal}
        setIsActiveListHandler={setIsActiveListHandler}
        isActiveList={isActiveList}
        showNewListHandler={showNewListHandler}
      />
      <MainDisplay
        setOpenModal={setOpenModal}
        isActiveList={isActiveList}
        display={display}
        openModal={openModal}
      />
    </div>
  );
};

export default Dashboard;
