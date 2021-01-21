module.exports = (sequelize) => {
    const StudentClasses = sequelize.define("StudentClasses", {

    });

    StudentClasses.associate = models => {

        StudentClasses.hasMany(models.Students, {
            foreignKey: {
                allowNull: false
            }
        });
        StudentClasses.hasMany(models.Classes, {
            foreignKey: {
                allowNull: false
            }
        });
    };

    return StudentClasses;
};