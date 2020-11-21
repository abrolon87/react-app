import React, { Component } from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import ProductsContainer from './containers/ProductsContainer'
import Nav from './components/Nav'
import './App.css';
import { getProducts } from './actions/products';



class App extends Component {
  
  componentDidMount() {
    this.props.getProducts()
  }
  

  render() {
    return (
      <div className="App">
        
        <Router>
          <Nav />
          <ProductsContainer />
        </Router>
        
      </div>
    )
  }
}

export default connect(null, { getProducts })(App)
