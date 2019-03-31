const express = require("express");
const mongoose = require ("mongoose");

const app = express();

const bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const port = process.env.PORT || 3002;

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log(`Web server is now living in apartment ${port}(really)`);
  });