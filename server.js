var express = require("express");
var app = express();

// Set the view engine to ejs
app.set("view engine", "ejs");

// Public folder to store assets
app.use(express.static(__dirname + "/public"));

// Routes for app
app.get("/", (req, res) => {
  res.render("pad");
});
app.get("/:id", (req, res) => {
  res.render("pad");
});

// Get sharejs dependencies
var sharejs = require("share");
require("redis");

// Options for sharejs
var options = {
  db: { type: "redis" },
};

// Attach the express server to sharejs
sharejs.server.attach(app, options);

// Listen on port 8000
var port = process.env.PORT || 8000;
app.listen(port);
