import { configureStore } from "@reduxjs/toolkit";

import listsReducer from "./lists-slice";

const store = configureStore({
  reducer: {
    lists: listsReducer,
  },
});

export default store;
