module.exports = function (sequelize) {
    const TeacherClasses = sequelize.define("TeacherClasses", {

    });

    TeacherClasses.associate = models => {

        TeacherClasses.hasMany(models.Teachers, {
            foreignKey: {
                allowNull: false
            }
        });
        TeacherClasses.hasMany(models.Classes, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return TeacherClasses;
};