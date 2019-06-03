const express = require("express");
const app = express();
const port = 5000;

var mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/SimpleApp";

const cors = require("cors");
app.use(cors());

mongoose
  .connect(mongoURI, { useNewUrlParser: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
