const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Cart_Schema = new Schema({
  productId: mongoose.Types.ObjectId,
  title: String,
  price: String,
  quantity: Number,
  image: String
});
module.exports = Cart = mongoose.model("Cart", Cart_Schema, "Cart");
