var db = require("../models");

var burgerController = require("../controllers/burgerController.js");

module.exports = function (app) {

    app.get("/", burgerController.splashPage);

    app.get("/about", burgerController.aboutPage);

    app.get("/create", burgerController.createBurger);

    app.get("/editPage", burgerController.editPage);

    app.get("/editBurger", burgerController.editBurger);
}