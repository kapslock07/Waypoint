// Creating our Chat model
module.exports = function(sequelize, DataTypes) {
    var Chat = sequelize.define("Chat", {
      
      //Id of chat
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        }
    });

    Chat.associate = models => {
        Chat.hasMany(models.Message, {
            onDelete: "cascade"
        });

        Chat.hasMany(models.User);
    }

    return Chat;
  };