// Creating our Games model
module.exports = function(sequelize, DataTypes) {
  var Games = sequelize.define("Games", {
    
    //Id of game
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
    //Game Title
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    //Game Description
    desc: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "No Description Available"
    },
    //image for game
    image: {
        allowNull: true,
        defaultValue: "none"
    }
  });

  Games.associate(models => {
    Games.hasMany(models.User, {});
  });
  return Games;
};