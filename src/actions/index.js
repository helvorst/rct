import getRequest from '../func/getRequest';

export const fetchCategories = () => {
  return (dispatch, getState) => {
    // return getState().categories
    //   ? Promise.resolve()
    //   : fetch('http://localhost:3001/categories')
    //     .then(rsp => rsp.json())
    //     .then(items => dispatch(setCategories(items)));
    return fetch('http://localhost:3001/categories')
      .then(rsp => rsp.json())
      .then(items => dispatch(setCategories(items)));
  };
};

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

export const addCategory = (cat) => {
  return dispatch => {
    const req = getRequest(
      'http://localhost:3001/categories',
      'POST',
      cat
    );
    return fetch(req)
      .then(() => dispatch(fetchCategories()));
  };

//   {
//   type: 'ADD_CATEGORY',
//   payload: cat
// }
};

export const removeCategory = (id) => {
  return dispatch => {
    const req = getRequest(
      `http://localhost:3001/categories/${id}`,
      'DELETE'
    );
    return fetch(req)
      .then(() => dispatch(fetchCategories()));
  };
  // {
  //   type: 'REMOVE_CATEGORY',
  //     id
  // }
};

export const editCategory = (cat) => {
  return dispatch => {
    const req = getRequest(
      `http://localhost:3001/categories/${cat.id}`,
      'PUT',
      cat
    );
    return fetch(req)
      .then(() => dispatch(fetchCategories()));
  };
  // {
  // type: 'EDIT_CATEGORY',
  // payload: cat
  // }
};

export const setFilter = (flt) => ({
  type: 'SET_FILTER',
  payload: flt
});

