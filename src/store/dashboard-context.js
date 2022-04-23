import React, { createContext, useEffect, useState } from "react";
import { db } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";
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
  const [lists, setLists] = useState([]);

  const [openModal, setOpenModal] = useState(false);
  const [isActiveList, setIsActiveList] = useState("");
  const [display, setDisplay] = useState("Lists");

  const fetchLists = async () => {
    const listsCollectionRef = collection(db, "lists");
    const dbSnapshot = await getDocs(listsCollectionRef);
    const tempList = [];
    dbSnapshot.forEach((entry) =>
      tempList.push({ ...entry.data(), id: entry.id })
    );
    if (tempList.length > 0) {
      setLists(tempList);
      // setIsActiveList(tempList[0].id);
    }
  };
  useEffect(() => {
    fetchLists();
  }, [lists]);

  const setDisplayHandler = (listTitle) => {
    setDisplay(listTitle);
  };

  const setIsActiveListHandler = (listId) => {
    setIsActiveList(listId);
  };

  const showNewListHandler = () => {
    setOpenModal((prev) => !prev);
  };

  const addTodoHandler = async (newTodo) => {
    console.log(newTodo);
    const parentListRef = doc(db, "lists", newTodo.parentListId);
    await updateDoc(parentListRef, {
      todos: arrayUnion({ ...newTodo }),
    });
    // setLists((prevState) => {
    //   const tempArr = [...prevState];
    //   const listToBeUpdated = tempArr.find(
    //     (list) => list.id === newTodo.parentListId
    //   );
    //   listToBeUpdated.todos.push(newTodo);
    //   return [...tempArr];
    // });
  };

  const addListHandler = async (newList) => {
    console.log(newList);
    await setDoc(doc(db, "lists", newList.id), { ...newList });
    // setLists((prev) => [...prev, newList]);
    fetchLists();
  };

  return (
    <DashboardContext.Provider
      value={{
        lists,
        setDisplayHandler,
        setIsActiveListHandler,
        isActiveList,
        display,
        openModal,
        setOpenModal,
        showNewListHandler,
        addTodoHandler,
        addListHandler,
      }}
    >
      {props.children}
    </DashboardContext.Provider>
  );
};

export default DashboardContextProvider;
