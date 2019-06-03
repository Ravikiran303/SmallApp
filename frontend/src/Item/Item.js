import React, { Component } from "react";
import "./style.css";
export class Item extends Component {
  onClick = e => {
    console.log(this.props.product.quantity);
  };
  render() {
    return (
      <div className="item">
        <div>
          <img className="image" src={this.props.product.image} alt="" />
        </div>
        <div className="details">
          {this.props.product.title}
          <br />
          Avail Items : {this.props.product.quantity}
          <br />
          Price : {this.props.product.price}
          <br />
          <button className="add-button" onClick={this.onClick}>
            ADD
          </button>
        </div>
      </div>
    );
  }
}

export default Item;
