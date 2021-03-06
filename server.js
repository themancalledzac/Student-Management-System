// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************
// *** Dependencies
// =============================================================
var express = require("express");
const session = require("express-session");
const passport = require("./config/passport");
var exphbs = require("express-handlebars");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// We need to use sessions to keep track of our user's login status
app.use(
    session({ secret: "keyboard cat", resave: true, saveUninitialized: true })
);
app.use(passport.initialize());
app.use(passport.session());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Routes
// =============================================================
// require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.use(
    require("./routes/html-routes.js"),
    require("./routes/api-routes.js"),
    require("./routes/profile-routes.js"),
    require("./routes/teacher-route.js"),
    require("./routes/classes-route.js")
);


// Syncing our sequelize models and then starting our Express app
// =============================================================
db.sequelize.sync({}).then(function () {
    app.listen(PORT, function () {
        // eslint-disable-next-line no-console
        console.log("App listening on PORT " + PORT);
    });
});
