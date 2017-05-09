import undoable, {distinctState} from 'redux-undo';
let categories = (state = null, action) => {

  switch (action.type) {
    case 'SET_CATEGORIES':
      return [...action.list];
    // case 'ADD_CATEGORY':
    //   return [
    //     {...action.payload, id: state.length},
    //     ...state
    //   ];
    // case 'EDIT_CATEGORY':
    //   return state.map(t => {
    //     return t.id === action.payload.id
    //       ? {...action.payload}
    //       : t;
    //   });
    // case 'REMOVE_CATEGORY':
    //   //todo HOW TO REMOVE IT'S TODOS?
    //   return state.filter(x => x.id !== action.id);
    default:
      return state;
  }
};
categories = undoable(categories, {
  filter: distinctState()
});
export default categories;