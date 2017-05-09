import React from 'react';
import {shallow, mount} from 'enzyme';
import configureMockStore from 'redux-mock-store';
import CategoryList from './category-list.component';
import Category from '../category/category';

const cats = [
  {
    "id": 0,
    "name": "Clean somthing Cinderella!",
    "parent": null
  },

  {
    "id": 1,
    "name": "Clean eadable",
    "parent": null
  },
  {
    "id": 2,
    "name": "Clean divine",
    "parent": null
  }];

const storeConf = configureMockStore();
const storeState = () => ({categories: {present: cats}});
let store;

beforeEach(() => {
  store = storeConf(storeState);
});

it('should render list', () => {
  const list = mount(<CategoryList store={store}/>);
  expect(list.length).toBe(1);
  const cats = list.find('.category-component');
  expect(cats.length).toBe(3);
  expect(cats.first().find('.category-title').text()).toBe('Clean somthing Cinderella!')
  expect(list.find(Category).length).toBe(3);
});

