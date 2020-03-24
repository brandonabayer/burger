var express = require("express");

var PORT = process.env.PORT || 3000;

var app = express();

var bodyParser = require("body-parser");

const path = require("path");

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static(path.join(__dirname, "public")));

// Parse request body as JSON
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function () {
    console.log("App now listening at localhost:" + PORT);
});

mysql://zj6koinpilghbyzh:gumf3l5ql63ntgy2@dno6xji1n8fm828n.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/i7su9zp5tr2eqccx