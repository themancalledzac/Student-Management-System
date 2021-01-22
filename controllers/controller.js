
// here we create all our routes and set up logic within those routes

//============================================================================
// within our html-routes, and api-routes files, we require the following line at the top:
// var controller = require("../controllers/controller.js");
//============================================================================


//============================================================================
// If any of these routes need data, we can pass it in like this:

// ex.
// function editPage(req, res) {
//    db.Burgers.findAll({}).then(function (dbBurger) {
//        res.render("edit", dbBurger);
//    });

//============================================================================


//============================================================================
// If any of these routes need to create data, we can pass it in like this:

// ex.
//function createBurger(req, res) {
//    db.Burgers.create(
//
//        req.body).then(function (dbBurger) {
//        res.json(dbBurger);
//    });
//};

//============================================================================

// -------------------------------INDEX("/")----------------------------------
// this requires our html-routes file to contain a line, as follows:
// app.get("/"), controller.index);
function index(req, res) {
    res.render("index");
}

// --------------------------------LOGIN PAGE("/login")----------------------------
// this requires our html-routes file to contain a line, as follows:
// app.get("/login", controller.login);
function login(req, res) {
    res.render("login");
}

// --------------------------------MEMBERS PAGE("/members")----------------------------
// this requires our html-routes file to contain a line, as follows:
// app.get("/members", controller.members);
function members(req, res) {
    res.render("members");
}

// here we export all functions called ih html-routes and api-routes
module.exports = {
    index,
    login,
    members
};