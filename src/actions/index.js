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

export const addCategory= (cat) => ({
  type: 'ADD_CATEGORY',
  payload: cat
});

export const removeCategory= (id) => ({
  type: 'REMOVE_CATEGORY',
  id
});

export const editCategory= (cat) => ({
  type: 'EDIT_CATEGORY',
  payload: cat
});

export const setFilter= (flt) => ({
  type: 'SET_FILTER',
  payload: flt
});