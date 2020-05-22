

module.exports = (server, db) => {

    /*      * Here are the basic api routes for games *

            -GET /api/games -> used to search for games
            -GET /api/users -> used to get user info


    */

    server.get("/api/games", (req, res) => { //should use authentication middleware here
        let query = req.body.query;

        db.Games.findAll({
            where: {
                title: {
                    [Op.like]: '%' + query + '%'
                }
            },
            include: [db.User]
        }).then(data => {
            res.json(data);
        })
    });

    server.get("/api/users", (req,res) => {

    });
    

}