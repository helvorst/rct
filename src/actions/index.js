export * from './category_thunk';


export const fetchTodos = () => {
  return (dispatch, getState) => {
    return getState().todos
      ? Promise.resolve()
      : fetch('http://localhost:3001/todos')
        .then(rsp => rsp.json())
        .then(items => dispatch(setTodos(items)))
  }
};

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

export const setFilter = (flt) => ({
  type: 'SET_FILTER',
  payload: flt
});

