const isAuthenticated = require("../config/middleware/isAuthenticated");
const sequelize = require("sequelize");


module.exports = (server, db) => {

    //create routes here to manage chat db

    //https://sequelize.org/master/manual/creating-with-associations.html  <-- refrence theses docs when creating this

    server.post("/api/chat", (req, res) => {
        let data = req.body.data;

            
            db.Chat.findOrCreate({
                where: {
                    creatorId: data.creatorId,
                    joineeId: data.joineeId
                },
                defaults: {
                    creatorId: data.creatorId,
                    joineeId: data.joineeId  
                }
            }).then(data => {
               // console.log(data);
                res.status(200).end();
            });
    });

    server.get("/api/chat/:id", (req,res) => {
        let creatorId = req.params.id;
    
        db.Chat.findAll({
            where: {
                creatorId: creatorId
            },
            include: [db.Message]
        }).then(data => {
            res.json(data);
        });
    });


}