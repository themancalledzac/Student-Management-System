module.exports = (sequelize) => {
    const StudentClasses = sequelize.define("StudentClasses", {

    });

    StudentClasses.associate = models => {

        StudentClasses.belongsTo(models.Students, {
            foreignKey: {
                allowNull: false
            }
        });
        StudentClasses.belongsTo(models.Classes, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return StudentClasses;
};