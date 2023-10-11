import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { uiReducer, initialState } from './reducers/uiReducer';

const store = createStore(uiReducer, initialState);


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
