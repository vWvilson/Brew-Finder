const express = require("express");
const mongoose = require ("mongoose");
const app = express();
const cors = require("cors");
const morgan = require('morgan')


// logger
app.use(morgan('dev'))

const SigninRoutes = require("./routes/signin.routes");

const SignupRoutes = require("./routes/signup.routes");
const BrewRoutes = require("./routes/signup.routes");

const dev_db_url = 'mongodb://user:user123@ds139946.mlab.com:39946/brewfinder'
const mongoDB = process.env.MONGODB_URI || dev_db_url
mongoose.connect(mongoDB,{ useNewUrlParser: true });
mongoose.Promise = global.Promise;
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
app.use("/signup", SignupRoutes)
app.use("/signin", SigninRoutes)
app.use("/brews", BrewRoutes)


const port = process.env.PORT || 3002;

app.listen(port, (err) => {
  if (err) {
    return console.log("Error", err);
  }
  console.log(`Web server is now running on ${port}`);
  });