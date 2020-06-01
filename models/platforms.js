// Creating our Message model
module.exports = function(sequelize, DataTypes) {
    var Platform = sequelize.define("Platform", {
      
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

    return Platform;
  };