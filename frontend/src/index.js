import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux'  //set up store
import {composeWithDevTools} from 'redux-devtools-extension'
import rootReducer from './reducers/index'
import thunk from 'redux-thunk'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))

ReactDOM.render(
  <Provider store={store}>
    <Router>
    <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));


