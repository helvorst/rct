import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
//jest.unmock('./todo-edit.component');

import TodoEdit from './todo-edit.component';

import Input from '../../../shared/input/input.component';

//jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;
it('should change title', () => {
  const todo = {id: 0, name: 'some name', description: 'some description', done: false};
  const storeCreator = configureMockStore();
  const state = () => {
    return {
      todos: {present: [todo]},
    }
  };
  const  params = {todo: 0};
  const store = storeCreator(state);
  const edit = mount(<TodoEdit store={store}  params={params}/>);

  edit.setState({todo: todo}, () => {
    expect(edit.state().todo.name).toBe(todo.name);
  });
  const input = edit.find(Input);
  const newName = 'new title';
  input.simulate('change',  {target: {value: newName}});
  expect(input.get(0).props.value).toBe(newName);
});