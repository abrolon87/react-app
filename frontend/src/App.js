import React, { Component } from 'react'
import ProductsContainer from './containers/ProductsContainer'
import Nav from './components/Nav'


class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Nav />
        <ProductsContainer />
      </div>
    )
  }
}

export default App
