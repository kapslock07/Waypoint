// Creating our Chat model
module.exports = function(sequelize, DataTypes) {
    var Chat = sequelize.define("Chat", {
      
      //Id of chat
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      //Users involved
      users: {
          type: DataTypes.STRING,
          allowNull: false
      }
    });
    return Chat;
  };