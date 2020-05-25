var express = require("express");
var bodyParser = require("body-parser");

var PORT = process.env.PORT || 3011;

var app = express();

// Serve static content for the app from the "public" directory
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

// Start our server
app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});