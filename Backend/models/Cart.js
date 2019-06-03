const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cart_Schema = new Schema({
  title: String,
  price: String,
  quantity: Number,
  image: String
});
module.exports = Product = mongoose.model("Cart", Cart_Schema, "Cart");
