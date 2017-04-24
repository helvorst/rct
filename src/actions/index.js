export * from './category_thunk';
//export * from './todo_saga';


export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
});

export const editTodo = (todo) => ({
  type: 'EDIT_TODO',
  payload: todo
});

export const toggleTodo = (todo) => ({
  type: 'TOGGLE_TODO',
  payload: todo
});

export const selectCategory = (id) => ({
  type: 'SELECT_CATEGORY',
  id
});

export const setCategories = (list) => ({
  type: 'SET_CATEGORIES',
  list
});

export const setFilter = (flt) => ({
  type: 'SET_FILTER',
  payload: flt
});

