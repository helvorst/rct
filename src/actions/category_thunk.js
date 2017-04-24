import getRequest from '../func/getRequest';
import {setCategories} from './index'

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
