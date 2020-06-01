const isAuthenticated = require("../config/middleware/isAuthenticated");
const sequelize = require("sequelize");
const chatController = require("../controllers/chatController");


module.exports = (server, db) => {

    //create routes here to manage chat db

    //https://sequelize.org/master/manual/creating-with-associations.html  <-- refrence theses docs when creating this

    server.post("/api/chat", (req, res) => {
        chatController.createChat(req, res);
    });

    server.get("/api/chat/:id", (req,res) => {
        let creatorId = req.params.id;
    
        db.Chat.findAll({
            where: {
                creatorId: creatorId
            },
            include: [db.Message, db.User]
        }).then(data => {
            res.json(data);
        });
    });


}