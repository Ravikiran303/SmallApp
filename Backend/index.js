const express = require("express");
const app = express();
const port = 5000;

var mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/SimpleApp";

const Product = require("./models/Product");
const Cart = require("./models/Cart");

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
  Product.find({}).exec(function(err, items) {
    if (err) {
      res.send("something is wrong");
    } else {
      res.status(200).json(items);
    }
  });
});

app.put("/items/:id", (req, res) => {
  var id = mongoose.Types.ObjectId(req.params.id);
  Product.updateOne({ _id: id }, { $inc: { quantity: -1 } }, function(
    err,
    result
  ) {
    if (err) {
      res.send(err);
    }
    var obj = Object.assign({}, req.body, { productId: req.body.id });
    delete obj.id;
    Cart.findOne({ productId: id }).then(result1 => {
      if (result1) {
        result1.quantity++;
        res.send(result1);
        return result1.save();
      } else {
        Cart.create(Object.assign({}, obj, { quantity: 1 })).then(responce => {
          res.status(201).json(responce);
        });
      }
    });
  });
});
app.get("/cart", (req, res) => {
  Cart.find({}).exec(function(err, items) {
    if (err) {
      res.status(404).send(err);
    }
    res.send(items);
  });
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
