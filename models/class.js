module.exports = function (sequelize, DataTypes) {
    const Classes = sequelize.define("Classes", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            },
            location: {
                type: DataTypes.STRING
            }
        }
    });

    Classes.associate = models => {

        Classes.belongsTo(models.TeacherClasses, {
            foreignKey: {
                allowNull: false
            }
        });

        Classes.belongsTo(models.StudentClasses, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Classes;

};