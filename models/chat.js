// Creating our Chat model
module.exports = function(sequelize, DataTypes) {
    var Chat = sequelize.define("Chat", {
      
      //Id of chat
      id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        creatorId: {
            type: DataTypes.INTEGER
        },
        joineeId: {
            type: DataTypes.INTEGER
        }
    });

    Chat.associate = models => {
        Chat.hasMany(models.Message, {
            onDelete: "cascade"
        });

        Chat.belongsToMany(models.User, { through: 'UserChats' });
    }

    return Chat;
  };