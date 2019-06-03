import React, { Component } from "react";
import axios from "axios";
import "./style.css";

export class Item extends Component {
  onClick = e => {
    var apiUrl = "http://localhost:5000";
    axios.put(apiUrl + `/items/${this.props.product._id}`).then(res => {
      console.log(res);
      this.props.decreaseProduct(this.props.product._id);
    });
  };
  render() {
    return (
      <div className="item">
        <div>
          <img className="image" src={this.props.product.image} alt="" />
        </div>
        <div className="details">
          {}
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
