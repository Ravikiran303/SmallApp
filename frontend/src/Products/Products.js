import React, { Component } from "react";
import Item from "../Item/Item";
import "./style.css";
import axios from "axios";
export class Products extends Component {
  state = {
    products: []
  };
  componentDidMount = () => {
    var apiUrl = "http://localhost:5000";
    axios
      .get(apiUrl + "/items")
      .then(res => {
        const products = res.data;
        console.log(products);
        this.setState({ products });
      })
      .catch(function(error) {
        console.log(error);
      });
  };
  decreaseItem = id => {
    var Product = this.state.products;
    var dummy = Product.findIndex(function(product) {
      return product._id === id;
    });
    var e = Product[dummy];
    e.quantity--;
    this.setState({
      product: Product
    });
  };
  goToCart = e => {
    this.props.history.push("/Cart");
  };
  render() {
    return (
      <div className="products">
        <div>
          <button className="notification" onClick={this.goToCart}>
            Cart
          </button>
        </div>
        <div>
          {this.state.products.map((product, index) => (
            <Item
              product={product}
              key={index}
              id={index}
              decreaseProduct={this.decreaseItem}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Products;
