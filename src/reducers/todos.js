let todos_ = [
  {id: 0, name: 'Clean windows', done: false, description: 'some desc', category: 0},
  {id: 1, name: 'Clean car', done: false, description: 'some desc', category: 0},
  {id: 2, name: 'Clean house', done: false, description: 'some desc', category: 1},
  {id: 3, name: 'Clean fruits', done: true, description: 'some desc', category: 1},
  {id: 4, name: 'buy windows', done: false, description: 'some desc', category: 3},
  {id: 5, name: 'buy car', done: false, description: 'some desc', category: 3},
  {id: 6, name: 'buy house', done: true, description: 'some desc', category: 3},
  {id: 7, name: 'buy fruits', done: false, description: 'some desc', category: 3},
  {id: 8, name: 'paint windows', done: false, description: 'some desc', category: 6},
  {id: 9, name: 'paint car', done: false, description: 'some desc', category: 6},
  {id: 10, name: 'paint house', done: false, description: 'some desc', category: 6},
  {id: 11, name: 'paint fruits', done: true, description: 'some desc', category: 6}
];

const todos = (state = todos_, action) => {

  switch (action.type) {
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