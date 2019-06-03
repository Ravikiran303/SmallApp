const express = require("express");
const app = express();
const port = 5000;

var mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/SimpleApp";

const Product = require("./models/Product");

const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);

const cors = require("cors");
app.use(cors());

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Products");
});
app.post("/items", (req, res) => {
  console.log(req.body);
  Product.create(req.body).then(responce => {
    res.status(201).json(responce);
  });
});
app.get("/items", (req, res) => {
  Product.find({}).then(result => {
    res.status(200).send(result);
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
