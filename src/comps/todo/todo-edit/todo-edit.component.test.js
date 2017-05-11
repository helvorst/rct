import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import sinon from 'sinon';
import TodoEdit from './todo-edit.component';
import TodoEditComponent from './todo-edit.component';
import Input from '../../../shared/input/input.component';
import Textarea from '../../../shared/textarea/textarea.component';
import Checkbox from '../../../shared/checkbox/checkbox.component';
import Button from '../../../shared/button/button.component';
import {editTodo} from '../../../actions'

//jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

let edit;
const todo = {id: 0, name: 'some name', description: 'some description', done: false};
//const store = configureMockStore()();
const mockDisp= jest.fn();

beforeEach(() => {
  const params = {todo: 0};
  edit = mount(<TodoEditComponent todos={[todo]} params={params} dispatch={mockDisp} router={[]}/>);
  edit.setState({todo: todo});
});

it('should set state correctly', () => {
  expect(edit.state().todo).toBe(todo)
});

it('should change title', () => {
  const input = edit.find(Input);
  const newName = 'new title';
  const handler = sinon.spy(edit.instance(), 'changeName');
  input.simulate('change', {target: {value: newName}});
  expect(input.get(0).props.value).toBe(newName);
  expect(handler.calledWith(newName)).toBeTruthy()
});

it('should change description', () => {
  const textarea = edit.find(Textarea);
  const newdesc = 'new description';
  const myMock = sinon.spy(edit.instance(), 'changeDesc');
  textarea.simulate('change', {target: {value: newdesc}});
  expect(textarea.get(0).props.value).toBe(newdesc);
  expect(myMock.calledWith(newdesc)).toBe(true);
});

it('should change done', () => {
  const check = edit.find(Checkbox);
  const myMock = sinon.spy(edit.instance(), 'changeDone');
  check.simulate('change', {target: {value: true}});
  // expect(myMock.calledWith(true)).toBe(true);
  // expect(check.get(0).props.value).toBe(true);
});

it('should call save', () => {
  const btns = edit.find(Button);
  const save = btns.findWhere(b => b.props().name === 'save');
  save.simulate('click');
  expect(mockDisp).toHaveBeenCalledWith(editTodo(todo))
});