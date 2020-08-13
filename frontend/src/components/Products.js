import React from 'react'

class Products extends React.Component {
  // render() {
  //   return (
  //     <div>
  //       PRODUCTS
  //     </div>
  //   )
  // }
  render() {
    const products = this.props.products.map((product, i) => <li key={i}>{product.name}
    <button id={product.id} onClick={this.handleClick} >X</button>
    </li>)  //add a tag later 
    return (
      <div>
        <h1>Click on a Product to see its uses:</h1>
        <ul>
          {this.props.loading ? <h3>Loading...</h3> : products}
        </ul>
        
      </div>
    )
  }
}

export default Products;