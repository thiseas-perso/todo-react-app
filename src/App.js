import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";

import { fetchLists } from "./store/lists-slice";

import "./App.css";
import Dashboard from "./Components/Dashboard";

function App() {
  const dispatch = useDispatch();
  const status = useSelector((state) => state.lists.status);
  const error = useSelector((state) => state.lists.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchLists());
    }
  }, [status, dispatch]);

  let content;
  if (status === "loading") {
    content = <p>"LOADING....</p>;
  } else if (status === "succeeded") {
    content = <Dashboard />;
  } else if (status === "failed") {
    content = <p>{error}</p>;
  }
  return <div className="App">{content}</div>;
}

export default App;
