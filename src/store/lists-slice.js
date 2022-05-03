import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { db } from "../firebase/firebase-config";
import {
  collection,
  getDocs,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
} from "firebase/firestore";

const initialState = {
  lists: [],
  status: "idle",
  error: null,
};

export const fetchLists = createAsyncThunk("lists/fetchLists", async () => {
  const listsCollectionRef = collection(db, "lists");
  const dbSnapshot = await getDocs(listsCollectionRef);
  const tempList = [];
  dbSnapshot.forEach((entry) => tempList.push({ ...entry.data() }));
  return [...tempList];
});

export const addNewList = createAsyncThunk(
  "lists/addNewList",
  async (newList) => {
    await setDoc(doc(db, "lists", newList.id), { ...newList });
    return newList;
  }
);
export const addNewTodo = createAsyncThunk(
  "lists/addNewTodo",
  async (newTodo) => {
    const parentListRef = doc(db, "lists", newTodo.parentListId);
    await updateDoc(parentListRef, {
      todos: arrayUnion({ ...newTodo }),
    });
    return newTodo;
  }
);

const listsSlice = createSlice({
  name: "lists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchLists.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchLists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.lists = state.lists.concat(action.payload);
      })
      .addCase(fetchLists.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(addNewList.fulfilled, (state, action) => {
        state.lists.push(action.payload);
      })
      .addCase(addNewTodo.fulfilled, (state, action) => {
        const parentList = state.lists.find(
          (list) => list.id === action.payload.parentListId
        );
        parentList.todos.push(action.payload);
      });
  },
});

export const listsActions = listsSlice.actions;
export default listsSlice.reducer;
