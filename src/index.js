import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducer from './reducers';
import { createLogger } from 'redux-logger'
import thunk  from 'redux-thunk';

const middleware = [ thunk   ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger());
}
console.log(process)

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

ReactDOM.render(
      <Provider store={store}>
        <App/>
      </Provider>,
  document.getElementById('root')
);
