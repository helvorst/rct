import React from 'react';
import {shallow} from 'enzyme';
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
const storeState = () => ({categories: cats});
let store;

beforeEach(() => {
  store = storeConf(storeState);
});

it('should render empty list', () => {
  const list = shallow(<CategoryList store={store}/>);
  console.log(list.find(<Category/>));
  expect(list.find(<Category/>).length).toBe(3);
});