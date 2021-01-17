// Sequelize (capital) references the standard library
var Sequelize = require("sequelize");
// sequelize (lowercase) references our connection to the DB.
var sequelize = require("../config/connection.js");

// Creates a "Teacher" model that matches up with DB
var Teacher = sequelize.define("teacher", {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            len: [1, 50]
        }
    },
    degree: Sequelize.STRING,
    rating: Sequelize.STRING,
    department: Sequelize.DATE,
    yearsTeaching: Sequelize.DATE,
    // does this need to be a FK in the teacher_student table?
    userReviews: Sequelize.DATE,
    officeHours: Sequelize.DATE,
    officeLocation: Sequelize.DATE,
    publications: Sequelize.DATE,
});

// Syncs with DB
Teacher.sync();

// Makes the Chirp Model available for other files (will also create a table)
module.exports = Teacher;