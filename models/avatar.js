// Creating our Avatar model
module.exports = function(sequelize, DataTypes) {
    var Avatar = sequelize.define("Avatar", {
      
      //Id of chat
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        title: {
            type: DataTypes.STRING
        },
        src: {
            type: DataTypes.STRING
        }
    });


    return Avatar;
  };