module.exports = (sequelize, DataTypes) => {
    const Classes = sequelize.define("Classes", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        },
        location: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        }
        // time: {},

    });

    Classes.associate = models => {

        Classes.belongsTo(models.Teachers, {
            foreignKey: {
                allowNull: false
            }
        });

        Classes.hasMany(models.StudentClasses, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return Classes;
};