export * from './category_thunk';
//export * from './todo_saga';

export const getTodo = () => ({
  type: 'GET_TODOS'
});

export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  payload: todo
});

export const editTodo = (todo) => ({
  type: 'EDIT_TODO',
  payload: todo
});

export const setTodos = (todos) => ({
  type: 'SET_TODOS',
  list: todos
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

