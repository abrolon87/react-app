import React, {Component} from 'react';
import {connect} from 'react-redux'
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  // componentDidMount() {
  //   fetch('http://localhost:3001/products', {
  //     method: 'GET'
  //   })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }

  render() {
    return (
      <div className="App">
        Home Remedies
      </div>
    )
  }
}

export default connect()(App);
