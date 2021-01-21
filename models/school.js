module.export = function (sequelize, DataTypes) {
    const School = sequelize.define("School", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1, 100]
            }
        }
    });

    School.associate = models => {
        School.hasMany(models.Teachers, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return School;
};