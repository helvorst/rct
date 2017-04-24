
const todos = (state = [], action) => {

  switch (action.type) {
    case 'SET_TODOS':
      return [...action.list];
    case 'ADD_TODO':
      return [
        ...state,
        action.payload
      ];
    case 'TOGGLE_TODO':
      return state.map(t => {
        if (t.id === action.id) {
          t = {...t, done: !t.done};
        }
        return t;
      });
    case 'EDIT_TODO':
      return state.map(t => {
        return t.id === action.payload.id
          ? {...action.payload}
          : t;
      });
    default:
      return state;
  }
};

export default todos;