import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {fetchCategories, addCategory} from './category_thunk';
import {setCategories} from './index';
import reducer from '../reducers';
import {createStore, applyMiddleware} from 'redux';
global.fetch = require('jest-fetch-mock');

describe('category: FAKE store', () => {
  let fakestore;
    const getUrl = 'http://localhost:3001/categories';
    const cc = [{
      id: 0,
      name: "Clean somthing Cinderella!",
      parent: null
    }];
  const mockStore = configureMockStore([thunk]);

  beforeEach(() => fakestore = mockStore());

  afterEach(() => fetchMock.restore());

  it('should fetch categories list', () => {
    const getUrl = 'http://localhost:3001/categories';
    const cc = [{
      id: 0,
      name: "Clean somthing Cinderella!",
      parent: null
    }];
    fetchMock.get(getUrl, cc);

    return fakestore.dispatch(fetchCategories())
      .then(() => {
        expect(fetchMock.called(getUrl)).toBe(true);
        expect(fakestore.getActions()).toEqual([setCategories(cc)])
      })
  });
});

describe('category: REAL store', () => {
  const store2 = createStore(
    reducer,
    applyMiddleware(thunk)
  );

  const cc = [{
    id: 0,
    name: "Name",
    parent: null
  }];

  afterEach(() => {
    fetchMock.restore();
    fetch.resetMocks();
  });

  it('should fetch categories list', () => {
    const getUrl = 'http://localhost:3001/categories';
    fetchMock.get(getUrl, cc);
    return store2.dispatch(fetchCategories())
      .then(() => {
        expect(fetchMock.called(getUrl)).toBe(true);
        expect(store2.getState().categories).toEqual(cc);
      })
  });

  it('should add new category', () => {
    const newCat = {name: 'New cat', parent: 0};
    const ccc = [...cc, {...newCat, id: 1}];

    fetch.mockResponseOnce(JSON.stringify({ }));
    fetch.mockResponseOnce(JSON.stringify(ccc));

    return store2.dispatch(addCategory(newCat))
      .then(() => {
        expect(store2.getState().categories).toEqual(ccc);
      })
  })
});