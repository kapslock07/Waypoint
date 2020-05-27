const isAuthenticated = require("../config/middleware/isAuthenticated");
const sequelize = require("sequelize");

module.exports = (server, db) => {

    /*      * Here are the basic api routes for games *

            -GET /api/games -> used to grab all games


            -GET /api/users -> used to get user info
            -POST /api/users -> add user to db


    */


    //returns all games from db
    server.get("/api/games", (req, res) => { 
        db.Games.findAll({
            include: [db.User]
        }).then(data => {
            res.json(data);
        });
    });

    //returns all games by title
    server.get("/api/games/:title", (req, res) => {
        db.Games.findAll({
            where: {
                title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', '%' + req.params.title + '%')
            },
            include: [db.User]
        }).then(data => {
            res.json(data);
        });
    });

    //returns all games by title and genre
    server.get("/api/games/:platforms/:title", (req, res) => {
        db.Games.findAll({
            where: {
                title: sequelize.where(sequelize.fn('LOWER', sequelize.col('title')), 'LIKE', '%' + req.params.title + '%'),
                platforms: sequelize.where(sequelize.fn('LOWER', sequelize.col('platforms')), 'LIKE', '%' + req.params.platforms + '%')
            },
            include: [db.User]
        }).then(data => {
            res.json(data);
        });
    });

    

}