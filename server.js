// Handles server requests
const express = require("express");
// Middleware logger for request details
const logger = require("morgan");
// Asynchronous environment for MongoDB
const mongoose = require("mongoose");
// Decreases the downloadable amount of data that's served to users
const compression = require("compression");

// Sets Server 3000 to PORT
const PORT = 3000;

// Sets Express connection to "app"
const app = express();

// Morgan Connection
app.use(logger("dev"));
// Compression Connection
app.use(compression());
// Express Connections
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongoose Connection
mongoose.connect("mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// Routes
app.use(require("./routes/api.js"));

// Server Listener
app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});