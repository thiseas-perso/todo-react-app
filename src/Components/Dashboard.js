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
  const [openModal, setOpenModal] = useState(false);

  const setDisplayHandler = (itemTitle) => {
    setDisplay(itemTitle);
  };

  const setItemDisplayHandler = (itemId) => {
    setIsItemActive(itemId);
  };

  const addNewListHandler = (newItem) => {
    console.log({ newItem });
    setLists((prevState) => {
      return [...prevState, newItem];
    });
    setOpenModal(false);
    setIsItemActive(newItem.id);
  };

  const addNewTodoHandler = (incomingTodo) => {
    const newTodo = {
      title: incomingTodo.title,
      date: new Date(incomingTodo.date),
      id: incomingTodo.id,
    };
    setLists((prevState) => {
      let newArr = [...prevState];
      let listToBeUpdated = newArr.find(
        (list) => list.id === incomingTodo.parentListId
      );
      listToBeUpdated.todos.push(newTodo);
      return [...newArr];
    });
  };

  return (
    <div id="dashboard">
      <Navbar
        setDisplay={setDisplayHandler}
        lists={lists}
        setItemDisplayHandler={setItemDisplayHandler}
        isItemActive={isItemActive}
        setOpenModal={setOpenModal}
        openModal={openModal}
      />
      <MainDisplay
        display={display}
        isItemActive={isItemActive}
        items={lists}
        onAddNewTodo={addNewTodoHandler}
        openModal={openModal}
        onAddNewList={addNewListHandler}
      />
    </div>
  );
};

export default Dashboard;
