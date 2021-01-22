module.exports = (sequelize) => {
    const TeacherClasses = sequelize.define("TeacherClasses", {

    });

    TeacherClasses.associate = models => {

        TeacherClasses.belongsTo(models.Teachers, {
            foreignKey: {
                allowNull: false
            }
        });
        TeacherClasses.belongsTo(models.Classes, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return TeacherClasses;
};