import React from 'react';
import {mount} from 'enzyme';
import TodoList from '../../comps/todo/todo-list/todo-list.component';
import Todo from '../../comps/todo/todo/todo.component';
import Search from './search.component';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';
import reducer from '../../reducers/';
import {setTodos, setFilter} from '../../actions'

const todos =  [{
  "id": 0,
  "name": "Clean windows",
  "done": true,
  "description": "some desc",
  "category": 0
},   {
  "id": 1,
  "name": "Clean car",
  "done": false,
  "description": "some desc",
  "category": 0
},   {
  "id": 2,
  "name": "Clean house",
  "done": false,
  "description": "some desc",
  "category": 0
}];
const storeConf = configureMockStore();
const storeState = () => ({todos: todos, category: 0, filter: {done: false, search: ''}});
let store, list, search;

beforeEach(() => {
  store = createStore(reducer, applyMiddleware(thunk));  //storeConf(storeState);
  store.dispatch(setTodos(todos));
  list = mount(<TodoList store={store}/>);
  search = mount(<Search store={store}/>);
});

it('should render the list', () => {
  expect(list.length).toBe(1);
});

it('should render the todo', () => {
  expect(list.find(Todo).length).toBe(3);
});

it('should filter by done', () => {
  const chechbox = search.find('input[type="checkbox"]');
  chechbox.simulate('change');
  store.dispatch(setFilter({search: '', done: true}));
  expect(list.find(Todo).length).toBe(1);
});

