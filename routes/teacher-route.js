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

// html route for teachers page

router.get("/teacher", isAuthenticated, (req, res) => {
    //If the user already has an accoutn send them to class page
    db.Teachers.findAll(

    ).then((dbTeachers) => {
        let resultAsJson = dbTeachers.map((dbTeachers) => dbTeachers.toJSON());
        let result = { data: resultAsJson };
        res.render("teacher", result);
    });
});


/* -------------------------------------------------------------------------- */
router.post("/teacher/add/:id", isAuthenticated, async (req) => {
    // eslint-disable-next-line no-unused-vars
    const addTeacher = await db.TeacherStudents.findOrCreate({
        where: {
            StudentId: req.user.id,
            TeacherId: req.params.id

        }
        // createdAt: CURRENT_TIMESTAMP,
        // updatedAt: CURRENT_TIMESTAMP,

    });
    // .then(() => {
    //     res.redirect(307, "/api/login");
    // })
    // .catch(err => {
    //     res.status(401).json(err);
    // });
});


module.exports = router;