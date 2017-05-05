import {call, put, takeEvery} from 'redux-saga/effects';
import getRequest from '../func/getRequest';
import {setTodos} from './index';

export const fetchTodos = (req) => {
  return fetch(req)
    .then(rsp => rsp.json())
};
export const req_get =  getRequest(
  'http://localhost:3001/todos',
  'GET'
);
export function* get() {
  const list = yield call(fetchTodos, req_get);
  yield put(setTodos(list));
}

function* add(action) {
  const list = yield call(fetchTodos, getRequest(
    'http://localhost:3001/todos',
    'POST',
    action.payload
  ));
  yield put({type: "GET_TODOS"});
}

function* update(action) {
  yield call(fetchTodos, getRequest(
    `http://localhost:3001/todos/${action.payload.id}`,
    'PUT',
    action.payload
  ));
  yield put({type: "GET_TODOS"});
}

export function* rootSaga() {
  yield takeEvery("GET_TODOS", get);
  yield takeEvery("ADD_TODO", add);
  yield takeEvery("TOGGLE_TODO", update);
  yield takeEvery("EDIT_TODO", update);
}