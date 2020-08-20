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
import Nav from './components/Nav'
import * as serviceWorker from './serviceWorker';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))
// Home Page, Nav, Routes, 
ReactDOM.render(
  <Provider store={store}>
    <Router>
    <Nav />
    <App />
    </Router>
  </Provider>, 
  document.getElementById('root'));


serviceWorker.unregister();
