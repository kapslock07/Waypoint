

module.exports = (server, db) => {

    /*      * Here are the basic api routes for games *

            -GET /api/games -> used to grab all games


            -GET /api/users -> used to get user info
            -POST /api/users -> add user to db


    */


    //returns all games from db
    server.get("/api/games", (req, res) => { //should use authentication middleware here
        db.Games.findAll({
            include: [db.User]
        }).then(data => {
            res.json(data);
        });
    });

    server.get("/api/users", (req,res) => { //should use authentication middleware here
        db.User.findOne({
            where: {
                id: req.user.id
            }
        }).then(data => {
            res.json(data);
        });
    });
    

}