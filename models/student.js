module.exports = function (sequelize, DataTypes) {
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
        userName: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 25]
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            validate: {
                isEmail: true,
            }
        }
    });

    Students.associate = models => {
        Students.belongsTo(models.TeacherStudents, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Students;
};