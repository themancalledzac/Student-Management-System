// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
// Creating our students model
module.exports = (sequelize, DataTypes) => {
    const Students = sequelize.define("Students", {
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
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
              isEmail: true
            }
          }
    });
    Students.associate = models => {
        Students.hasMany(models.TeacherStudents, {
            foreignKey: {
                allowNull: false
            }
        });
        Students.hasMany(models.StudentClasses, {
            foreignKey: {
                allowNull: false
            }
        });
    };

      // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
    Students.prototype.validPassword = function(password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    Students.addHook("beforeCreate", user => {
        user.password = bcrypt.hashSync(
        user.password,
        bcrypt.genSaltSync(10),
        null
        );
    });

    return Students;
};