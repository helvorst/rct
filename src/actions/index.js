export const setTodos = (list) => ({
  type: 'SET_TODOS',
  list
});

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
});

export const editTodo = (todo) => ({
  type: 'EDIT_TODO',
  payload: todo
});

export const toggleTodo = (id) => ({
  type: 'TOGGLE_TODO',
  id
});

export const selectCategory = (id) => ({
  type: 'SELECT_CATEGORY',
  id
});

export const setCategories = (list) => ({
  type: 'SET_CATEGORIES',
  list
});

export const addCategory = (cat) => ({
  type: 'ADD_CATEGORY',
  payload: cat
});

export const removeCategory = (id) => ({
  type: 'REMOVE_CATEGORY',
  id
});

export const editCategory = (cat) => ({
  type: 'EDIT_CATEGORY',
  payload: cat
});

export const setFilter = (flt) => ({
  type: 'SET_FILTER',
  payload: flt
});

export const fetchCategories = () => {
  return (dispatch) => {
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
    return setTimeout(() => {
      dispatch(setCategories(categories_));
    }, 2000)
  };
};

export const fetchTodos = () => {
  return dispatch => {
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
    return setTimeout(() => {
      dispatch(setTodos(todos_));
    }, 2000)
  }
}