const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Product_Schema = new Schema({
  title: String,
  price: String,
  quantity: String,
  image: String
});
module.exports = Product = mongoose.model("Product", Product_Schema, "Product");
