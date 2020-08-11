import React from 'react';
// import logo from './logo.svg';
// import './App.css';

class App extends React.Component {

  componentDidMount() {
    fetch('http://localhost:3001/products', {
      method: 'GET'
    })
    .then(resp => resp.json())
    .then(data => console.log(data))
  }

  render() {
    return (
      <div className="App">
        Home Remedies
      </div>
    )
  }
}

export default App;
