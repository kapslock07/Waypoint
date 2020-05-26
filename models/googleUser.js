// Creating our Games model
module.exports = function (sequelize, DataTypes) {
    var GoogleUser = sequelize.define("GoogleUser", {

        //Id of user in database
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        //Google ID
        googleId: {
            type: DataTypes.STRING,
            allowNull: false
        },
        profileImage: {
            type: DataTypes.STRING
        }
    });


    GoogleUser.associate = models => {
        GoogleUser.belongsTo(models.Games);
    };
    return GoogleUser;
};