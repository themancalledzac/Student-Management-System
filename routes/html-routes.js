// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
const express = require("express");
const router = express.Router();
var db = require("../models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");

router.get("/", function(req, res) {
      res.render("index");
});

router.get("/signup", function(req, res) {
    res.render("signup");
});

router.get("/profile", isAuthenticated, (req, res) => {
    // If the user already has an account send them to the members page
    res.render("profile");
});

// router.get("/login", (req, res) => {
//     // If the user already has an account send them to the members page
//     if (req.user) {
//         res.redirect("/members");
//     }
//     res.sendFile(path.join(__dirname, "../public/login.html"));
// });

// Here we've add our isAuthenticated middleware to this route.
// If a user who is not logged in tries to access this route they will be redirected to the signup page
router.get("/members", isAuthenticated, (req, res) => {
    res.render("profile");
});

module.exports = router;

