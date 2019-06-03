import React, { Component } from "react";
import Item from "../Item/Item";
import "./style.css";

export class Products extends Component {
  state = {
    products: [
      {
        image:
          "https://4.imimg.com/data4/JG/QK/ANDROID-55939837/product-500x500.jpeg",
        title: "Red MI",
        price: "10 K",
        quantity: 10
      },
      {
        image:
          "https://images-na.ssl-images-amazon.com/images/I/41KojJlejNL.jpg",
        title: "VIVO",
        price: "14 K",
        quantity: 5
      },
      {
        image:
          "https://d2pa5gi5n2e1an.cloudfront.net/global/images/product/mobilephones/OPPO_R17/OPPO_R17_L_1.jpg",
        title: "OPPO",
        price: "11 K",
        quantity: 7
      },
      {
        image:
          "https://rukminim1.flixcart.com/image/704/704/j1dvte80/mobile/p/a/t/apple-iphone-5s-a1530-original-imae2fhpc35bftft.jpeg?q=70",
        title: "i Phone",
        price: "50 K",
        quantity: 6
      },
      {
        image:
          "https://n4.sdlcdn.com/imgs/g/c/9/Samsung-Galaxy-J7-NXT-Plain-SDL393282299-1-b1067.jpg",
        title: "Samsung",
        price: "16 K",
        quantity: 10
      },
      {
        image: "https://cdn2.gsmarena.com/vv/pics/nokia/nokia-42-1.jpg",
        title: "Nokia",
        price: "15 K",
        quantity: 9
      }
    ]
  };
  decreaseItem = id => {
    var e = this.state.products;
    var neee = e[id];
    if (neee.quantity !== 0) {
      neee.quantity -= 1;
      console.log(neee);
    }
    this.setState({
      product: e
    });
  };
  render() {
    return (
      <div className="products">
        {this.state.products.map((product, index) => (
          <Item
            product={product}
            key={index}
            id={index}
            decreaseProduct={this.decreaseItem}
          />
        ))}
      </div>
    );
  }
}

export default Products;
