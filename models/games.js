// Creating our Games model
module.exports = function(sequelize, DataTypes) {
  var Games = sequelize.define("Games", {
    
    //Id of game
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    //Game Title
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    platforms: {
      type: DataTypes.STRING
    },
    //image for game
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "none"
    },
    short_screenshots: {
      type: DataTypes.STRING
    },
    genres: {
      type: DataTypes.STRING
    }
  });

  Games.associate = models => {
    Games.hasMany(models.User);
  };
  return Games;
};