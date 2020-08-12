import React, {Component} from 'react';
import {connect} from 'react-redux'
import {getProducts} from './actions/products'
import ProductForm from './containers/ProductForm';
// import logo from './logo.svg';
// import './App.css';

class App extends Component {

  componentDidMount() {
    this.props.getProducts()
    // fetch('http://localhost:3001/products', {
    //   method: 'GET'
    // })
    // .then(resp => resp.json())
    // .then(data => console.log(data))
  }

  render() {
  const products = this.props.products.map((product, i) => <li key={i}>{product.name}</li>)  //add a tag later 
    return (
      <div className="App">
        <h1>Add a Product </h1>

        <ProductForm />
        <h1>Click on a Product to see its uses:</h1>
        <ul>
          {this.props.loading ? <h3>Loading...</h3> :products}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    products: state.productReducer.products,
    loading: state.productReducer.loading
  }
}

export default connect(mapStateToProps, {getProducts})(App);
