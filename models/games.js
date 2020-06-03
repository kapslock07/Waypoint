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
      type: DataTypes.STRING, 
      get: function() {
          return JSON.parse(this.getDataValue('platforms'));
      }, 
      set: function(val) {
          return this.setDataValue('platforms', JSON.stringify(val));
      }
    },
    //image for game
    image: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "none"
    },
    //a bunch of screenshots to use 
    short_screenshots: {
      type: DataTypes.STRING, 
      get: function() {
          return JSON.parse(this.getDataValue('short_screenshots'));
      }, 
      set: function(val) {
          return this.setDataValue('short_screenshots', JSON.stringify(val));
      }
    },
    //Genres the game fits in
    genres: {
      type: DataTypes.STRING, 
      get: function() {
          return JSON.parse(this.getDataValue('genres'));
      }, 
      set: function(val) {
          return this.setDataValue('genres', JSON.stringify(val));
      }
    }
  });
  
  return Games;
};