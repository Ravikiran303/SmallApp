import React, { Component } from "react";
import Axios from "axios";

export class Cart extends Component {
  state = { products: [] };
  componentDidMount() {
    Axios.get("/cart").then(res => {
      this.setState({ products: res.data });
      console.log(res.data);
    });
  }
  render() {
    return (
      <div>
        {this.state.products.map((items, index) => {
          return (
            <div className="item" key={index} id={index}>
              <div>
                <img className="image" src={items.image} alt="" />
              </div>
              <div className="details">
                {items.title}
                <br />
                No of Items : {items.quantity}
                <br />
                Price : {items.price}
                <br />
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Cart;
