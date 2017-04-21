let categories_ = [
  {id: 0, name: "Category 1 Clean", parent: null},
  {id: 1, name: "Clean sub-1", parent: 0},
  {id: 2, name: "Clean sub-2", parent: 0},
  {id: 3, name: "Category 2 Buy", parent: null},
  {id: 4, name: "Buy sub-1", parent: 3},
  {id: 5, name: "Buy sub-2", parent: 3},
  {id: 6, name: "Category 3 Paint", parent: null},
  {id: 7, name: "Category 4 Empty", parent: null},
  {id: 8, name: "Clean sub-2-2", parent: 2},];


const categories = (state = categories_, action) => {

  switch (action.type) {
    case 'ADD_CATEGORY':
      return [
        {...action.payload, id: state.length},
        ...state
      ];
    case 'EDIT_CATEGORY':
      return state.map(t => {
        return t.id === action.payload.id
          ? {...action.payload}
          : t;
      });
    case 'REMOVE_CATEGORY':
      //todo HOW TO REMOVE IT'S TODOS?
      return state.filter(x => x.id != action.id);
    default:
      return state;
  }
};

export default categories;