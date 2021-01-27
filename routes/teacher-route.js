const db = require("../models");
var express = require("express");
const router = express.Router();
// const passport = require("../config/passport");

const isAuthenticated = require("../config/middleware/isAuthenticated");



router.get("/api/teacher", function (req, res) {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Teachers.findAll({

        }).then(function (dbTeachers) {
            res.json(dbTeachers);
        });
    }
});


router.get("/teacher", isAuthenticated, (req, res) => {
    // If the user already has an account send them to the members page
    res.render("teacher");
});
module.exports = router;