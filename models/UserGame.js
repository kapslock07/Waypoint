// Creating our userGame model
module.exports = function(sequelize, DataTypes) {
    var UserGame = sequelize.define("UserGame", {
      
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

    UserGame.associate = models => {
      UserGame.belongsTo(models.User); 
    };

    return UserGame;
  };