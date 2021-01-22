module.exports = (sequelize) => {
    const TeacherStudents = sequelize.define("TeacherStudents", {

    });

    TeacherStudents.associate = models => {

        TeacherStudents.belongsTo(models.Teachers, {
            foreignKey: {
                allowNull: false
            }
        });

        TeacherStudents.belongsTo(models.Students, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return TeacherStudents;
};