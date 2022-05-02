import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducer: {
    addList(state, action) {
      state.push(action.payload);
    },
    addTodo(state, action) {
      const parentList = state.find((list) => list.id === action.payload.id);
      parentList.push(action.payload);
    },
  },
});

export const listsActions = listsSlice.actions;
export default listsSlice.reducer;
