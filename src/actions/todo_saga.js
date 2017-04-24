import {call, put, takeEvery, takeLatest} from 'redux-saga/effects';
import getRequest from '../func/getRequest';

const fetchTodos = (req) => {
  return fetch(req)
    .then(rsp => rsp.json())
};

function* get() {
  const list = yield call(fetchTodos, getRequest(
    'http://localhost:3001/todos',
    'GET'
  ));
  yield put({type: "SET_TODOS", list});
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
  const list = yield call(fetchTodos, getRequest(
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