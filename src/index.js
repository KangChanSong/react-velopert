import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './modules';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(rootReducer, composeWithDevTools()) ; //스토어를 만든다.
// componseWithDevTools() 로 개발자 도구 활성화

ReactDOM.render(
  <Provider store = {store}>
      <App />
  </Provider>,
  document.getElementById('root')
);


