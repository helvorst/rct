import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import { createLogger } from 'redux-logger'
import thunk  from 'redux-thunk';
import {rootSaga} from './actions/todo_saga';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();
const middleware = [ thunk, sagaMiddleware];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
  document.getElementById('root')
);
