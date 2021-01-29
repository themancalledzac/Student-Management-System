
// Requiring our models and passport as we've configured it
const db = require("../models");
var express = require("express");
const router = express.Router();
// const passport = require("../config/passport");
const isAuthenticated = require("../config/middleware/isAuthenticated");

//api route for classes
router.get("/api/class", (req, res) => {
    if (!req.user) {
        // The user is not logged in, send back an empty object
        res.json({});
    } else {
        // Here we add an "include" property to our options in our findOne query
        // We set the value to an array of the models we want to include in a left outer join
        // In this case, just db.Post
        db.Classes.findAll({

        }).then((dbClasses) => {
            res.json(dbClasses);
        });
    }
});

//html route for classes
router.get("/class", isAuthenticated, (req, res) => {
    //If the user already has an accoutn send them to class page
    db.Classes.findAll(

    ).then((dbClasses) => {
        let resultAsJson = dbClasses.map((dbClasses) => dbClasses.toJSON());
        let result = { data: resultAsJson };
        res.render("class", result);
    });
});


router.post("/profile/addclass/:id", isAuthenticated, async (req, res) => {
    console.log(req.params.id);
    console.log(req.user.id);
    const addClass = await db.StudentClasses.create({
        ClassId: req.params.id,
        StudentId: req.user.id
    });
});


module.exports = router;
