import ReactDOM from 'react-dom';
import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';
import {Provider} from 'react-redux';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('startup App', () => {
  const storeConf = configureMockStore([thunk]);
  const storeState = () => ({filter: {done: false, search: ''}});
  let store;

  beforeEach(() => {
    store = storeConf(storeState);
    fetchMock.get('http://localhost:3001/categories', [])
  });

  it('app should keep snapshot', () => {
    const header = renderer.create(
      <Provider store={store}>
        <App/>
      </Provider>
    );
    const tree = header.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const root = <Provider store={store}><App/></Provider>;
    ReactDOM.render(root, div);
  });
});
