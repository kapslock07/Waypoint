// Creating our userPlatform model
module.exports = function(sequelize, DataTypes) {
    var UserPlatform = sequelize.define("UserPlatform", {
      
      //Id of message
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      title: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });

    UserPlatform.associate = models => {
        UserPlatform.belongsTo(models.User); 
    };


    return UserPlatform;
  };