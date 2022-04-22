export const listsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_LIST":
      return [
        ...state,
        {
          title: action.list.title,
          id: action.list.id,
          todos: action.list.todos,
        },
      ];
    case "ADD_TODO":
      console.log({ state });
      let updatedLists;
      const listToBeUpdatedIndex = state.findIndex(
        (list) => list.id === action.todo.parentListId
      );
      const listToBeUpdated = state[listToBeUpdatedIndex];
      console.log(listToBeUpdated);
      const updatedList = {
        ...listToBeUpdated,
        todos: listToBeUpdated.todos.concat(action.todo),
      };
      updatedLists = [...state];
      updatedLists[listToBeUpdatedIndex] = updatedList;

      return updatedLists;
    default:
      return state;
  }
};
