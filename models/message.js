// Creating our Message model
module.exports = function(sequelize, DataTypes) {
    var Message = sequelize.define("Message", {
      
      //Id of message
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      authorId: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      message: {
          type: DataTypes.STRING,
          defaultValue: ""
      },
      timestamp: {
          type: DataTypes.STRING
      }
    });

    Message.associate = models => {
        Message.belongsTo(models.Chat); //Messages should know which chat they are apart of

    };

    return Message;
  };