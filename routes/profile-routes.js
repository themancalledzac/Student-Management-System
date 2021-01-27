const db = require("../models");
var express = require("express");
const router = express.Router();
const isAuthenticated = require("../config/middleware/isAuthenticated");

// const mapDatavalues = row => row.dataValues;

// Route for getting some data about our user to be used client side
router.get("/api/profile-student", (req, res) => {
  if (!req.user) {
    // The user is not logged in, send back an empty object
    res.json({});
  } else {
    // Otherwise send back the user's email and id
    // Sending back a password, even a hashed password, isn't a good idea
    res.json({
      firstName: req.user.firstName,
      lastName: req.user.lastName,
      email: req.user.email,
      id: req.user.id
    });
  }
});

router.get("/profile", isAuthenticated, (req, res) => {
  // use findall method to render TeacherStudents data and pass back to the frontend
  // using the object teachers: resultsArray

  db.Teachers.findAll({
    include: [{
      model: db.TeacherStudents,
      //   attributes: [ ],
      where: {
        StudentId: req.user.id
      }
    },
    {
      model: db.Classes
    }]

  }).then(function (results) {
    const resultsArray = results.map(result => ({
      ...result.dataValues,
      Classes: result.dataValues.Classes.map(result => result.dataValues)
    }));
    // console.log(resultsArray[0].Classes);
    res.render("profile", { teachers: resultsArray });
  });

});

// router.get("/api/profile-teacher/:id", (req, res) => {
//     db.teacherstudents.findAll({
//         where: {
//             req.body.id
//         }
//     }).then(function (dbTeachers) {
//       res.json(dbTeachers);
//     });
//   }
// });

module.exports = router;



// could we do a:
// router.get("/profile", isAuthenticated, (req, res) => {
      // await teacherFindAll(teacherData);
      // await classFindAll(classData);
      // .then(function (results) {
          //
      // })
// })