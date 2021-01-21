module.exports = function (sequelize) {
    const TeacherStudents = sequelize.define("TeacherStudents", {

    });

    TeacherStudents.associate = models => {

        TeacherStudents.hasMany(models.Teachers, {
            foreignKey: {
                allowNull: false
            }
        });

        TeacherStudents.hasMany(models.Students, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return TeacherStudents;
};