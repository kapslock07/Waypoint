const isAuthenticated = require("../config/middleware/isAuthenticated");
const sequelize = require("sequelize");

module.exports = (server, db) => {
  /*      * Here are the basic api routes for games *

            -GET /api/games -> used to grab all games


            -GET /api/users -> used to get user info
            -POST /api/users -> add user to db


    */

  server.get("/api/users", (req, res) => {
    db.User.findAll({}).then(data => {
      res.json(data);
    });
  })

  //add a user to a game
  server.post("/api/games", (req, res) => {

    let titles = req.body.titles;

    db.Games.findAll({ //grabs all games with specified titles
      where: {
        title: {
          [sequelize.Op.in]: titles
        }
      }
    }).then(data => {
      data.forEach(e => {
        e.addUsers(req.body.userId);//adds user to game
        e.save();//saves it
      });
      res.status(200).end();
    });
  });


  //returns all games from db
  server.get("/api/games", (req, res) => {
    //return res.json(["mario or something"]);
    db.Games.findAll({
      include: [db.User],
    }).then((data) => {
      res.json(data);
    });
  });

  //return all platforms
  server.get("/api/platforms", (req,res) => {

    db.Platform.findAll({}).then(data => {
      res.json(data);
    });
  });

  //returns all games by title
  server.get("/api/games/:title", (req, res) => {
    db.Games.findAll({
      where: {
        title: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("title")),
          "LIKE",
          "%" + req.params.title + "%"
        ),
      },
      include: [db.User],
    }).then((data) => {
      res.json(data);
    });
  });

  //returns all games by title and genre
  server.get("/api/games/:platforms/:title", (req, res) => {
    db.Games.findAll({
      where: {
        title: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("title")),
          "LIKE",
          "%" + req.params.title + "%"
        ),
        platforms: sequelize.where(
          sequelize.fn("LOWER", sequelize.col("platforms")),
          "LIKE",
          "%" + req.params.platforms + "%"
        ),
      },
      include: [db.User],
    }).then((data) => {
      res.json(data);
    });
  });
};