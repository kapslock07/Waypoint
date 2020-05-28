// Creating our Message model
module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
      
      //Id of message
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
      message: {
          type: DataTypes.STRING,
          defaultValue: ""
      },
      timestamp: {
          type: DataTypes.STRING,
          defaultValue: new Date().getTime()
      }
    });

    Message.associate = models => {
        Message.hasOne(models.User, {
            foreignKey: {
                name: "userId",
                allowNull: false
            }
        });

        Message.hasOne(models.Chat, {
            foreignKey: {
                name: "chatId",
                allowNull: false
            }
        });
    };

    


    return Message;
  };