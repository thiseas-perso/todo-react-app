import React, { createContext, useReducer, useState } from "react";
import { listsReducer } from "./listReducer";

export const DashboardContext = createContext();

const DUMMY_DATA = [
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
];

const DashboardContextProvider = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const [lists, listsDispatch] = useReducer(listsReducer, [], () => [
    ...DUMMY_DATA,
  ]);
  const [isActiveList, setIsActiveList] = useState(lists[0].id || null);
  const [display, setDisplay] = useState("Lists");

  const setDisplayHandler = (listTitle) => {
    setDisplay(listTitle);
  };

  const setIsActiveListHandler = (listId) => {
    setIsActiveList(listId);
  };

  const addNewListHandler = () => {
    setOpenModal((prev) => !prev);
  };
  console.log(lists);
  return (
    <DashboardContext.Provider
      value={{
        lists,
        listsDispatch,
        setDisplayHandler,
        setIsActiveListHandler,
        isActiveList,
        display,
        openModal,
        setOpenModal,
        addNewListHandler,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
