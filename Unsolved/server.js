const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = 3000;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// mongoose.connect("mongodb://localhost/workout", {
//   useNewUrlParser: true,
//   useFindAndModify: false
// });

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://user1:password1@ds241268.mlab.com:41268/heroku_g67ngjt4",
  {
    useMongoClient: true
  }
);

// var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user1:password1@ds241268.mlab.com:41268/heroku_g67ngjt4";

// mongoose.connect(MONGODB_URI);

// routes
app.use(require("./routes/api.js"));
app.use(require("./routes/view.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});






