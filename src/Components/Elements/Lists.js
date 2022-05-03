import React from "react";
import { useSelector } from "react-redux";

import "./ListItems.css";
import List from "./List";

const Lists = ({
  setIsActiveListHandler,
  isActiveList,
  showNewListHandler,
}) => {
  const lists = useSelector((state) => state.lists);

  return (
    <div className="list-ctn">
      {
        <ul>
          {lists.length > 0 &&
            lists.map((list) => (
              <List
                key={list.id}
                id={list.id}
                title={list.title}
                setIsActiveListHandler={setIsActiveListHandler}
                isActiveList={isActiveList}
              />
            ))}
        </ul>
      }
      <button onClick={showNewListHandler}>Add New List</button>
    </div>
  );
};

export default Lists;
