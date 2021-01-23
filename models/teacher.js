module.exports = (sequelize, DataTypes) => {
    const Teachers = sequelize.define("Teachers", {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 50]
            }
        },
        degree: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        rating: {
            type: DataTypes.DECIMAL(10, 2),
            validate: {
                isInt: true,
                allowNull: false
            }
        },
        department: {
            type: DataTypes.STRING,
            allowNull: false
        },
        yearsTeaching: {
            type: DataTypes.DATEONLY,
        },
        officeHours: {
            type: DataTypes.DECIMAL(2, 2),
            validate: {
                len: [1, 5]
            }
        },
        officeLocation: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 75]
            }
        },
        publications: {
            type: DataTypes.STRING
        }

    });

    Teachers.associate = models => {

        Teachers.belongsTo(models.School, {
            foreignKey: {
                allowNull: false
            }
        });

        Teachers.hasMany(models.TeacherStudents, {
            foreignKey: {
                allowNull: false
            }
        });
        Teachers.hasMany(models.Classes, {
            foreignKey: {
                allowNull: false
            }
        });
    };
    return Teachers;
};


// // Sequelize (capital) references the standard library
// const { DECIMAL } = require("sequelize");
// var Sequelize = require("sequelize");
// // sequelize (lowercase) references our connection to the DB.
// var sequelize = require("../config/connection.js");

// // Creates a "Teacher" model that matches up with DB
// var Teacher = sequelize.define("teacher", {
//     firstName: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//             len: [1, 50]
//         }
//     },
//     lastName: {
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//             len: [1, 50]
//         }
//     },
//     degree: Sequelize.STRING,
//     rating: Sequelize.STRING,
//     department: Sequelize.DATE,
//     yearsTeaching: Sequelize.DATE,
//     // does this need to be a FK in the teacher_student table?
//     userReviews: Sequelize.DATE,
//     officeHours: Sequelize.DATE,
//     officeLocation: Sequelize.DATE,
//     publications: Sequelize.DATE,
// });

// // Syncs with DB
// Teacher.sync();

// // Makes the Chirp Model available for other files (will also create a table)
// module.exports = Teacher;