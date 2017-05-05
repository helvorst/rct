import {setTodos} from './index';
global.fetch = require('jest-fetch-mock');
import sagaHelper from 'redux-saga-testing';
import {get, fetchTodos, req_get} from './todo_saga';
import { call, put } from 'redux-saga/effects';


describe('TODO', () => {
  const it = sagaHelper(get());
  const todo = [{name: 'todo', id: 0}];
  it('should have called the mock API first', result => {
    expect(result).toEqual(call(fetchTodos, req_get));
    //expect(fetchTodos).not.toHaveBeenCalled();
    return todo;
  });
  it('and then trigger an action', result => {
    expect(result).toEqual(put(setTodos(todo)));
  });
});