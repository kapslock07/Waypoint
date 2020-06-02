// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");
// Creating our User model
module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {

    //Id of User
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    // If authenticated through google, a googleId will appear here
    googleId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    // The email cannot be null, and must be a proper email before creation
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'password'
    },
    // Username chosen 
    userName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    //user profile image - String for now ?? Discuss how to do this
    profileImage: {
      type: DataTypes.STRING
    },
    onboard: {
      types: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", function (user) {
    user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
  });


  User.associate = models => {
    User.belongsToMany(models.Games, { through: 'UserGames' });
    User.belongsToMany(models.Chat, { through: 'UserChats' });
  };
  return User;
};