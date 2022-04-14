import Navbar from "./Navbar";
import MainDisplay from "./MainDisplay";

import "./Dashboard.css";
import { useState } from "react";

const Dashboard = () => {
  const [lists, setLists] = useState([
    {
      title: "My Home List",
      id: "a",
      todos: [
        {
          title: "Feed Dog",
          date: new Date(2022, 4, 6),
          priority: 1,
          id: "a1",
        },
        {
          title: "Feed cat",
          date: new Date(2022, 4, 5),
          priority: 1,
          id: "a2",
        },
        {
          title: "Feed fish",
          date: new Date(2022, 4, 5),
          priority: 1,
          id: "a3",
        },
      ],
    },
    {
      title: "My Work List",
      id: "b",
      todos: [
        {
          title: "Send email",
          date: new Date(2022, 5, 6),
          priority: 3,
          id: "b1",
        },
        {
          title: "Meeting",
          date: new Date(2022, 4, 9),
          priority: 2,
          id: "b2",
        },
      ],
    },
  ]);
  const [display, setDisplay] = useState("Lists");
  const [isItemActive, setIsItemActive] = useState(lists[0].id || null);

  const setDisplayHandler = (itemTitle) => {
    setDisplay(itemTitle);
  };

  const setItemDisplayHandler = (itemId) => {
    setIsItemActive(itemId);
  };

  const addNewListHandler = (newItem) => {
    console.log(newItem);
    setLists((prevState) => {
      return [...prevState, newItem];
    });
  };

  return (
    <div id="dashboard">
      <Navbar
        setDisplay={setDisplayHandler}
        lists={lists}
        onAddNewList={addNewListHandler}
        setItemDisplayHandler={setItemDisplayHandler}
        isItemActive={isItemActive}
      />
      <MainDisplay display={display} items={lists} />
    </div>
  );
};

export default Dashboard;
