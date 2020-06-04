const isAuthenticated = require("../config/middleware/isAuthenticated");
const sequelize = require("sequelize");
const chatController = require("../controllers/chatController");


module.exports = (server, db) => {

    //create routes here to manage chat db

    //https://sequelize.org/master/manual/creating-with-associations.html  <-- refrence theses docs when creating this

    server.post("/api/chat", isAuthenticated, (req, res) => {
        chatController.createChat(req, res);
    });

    server.get("/api/chat/:id", isAuthenticated, (req,res) => {
        chatController.getChat(req,res);
    });

    server.get("/api/chat/messages/:id", isAuthenticated, (req, res) => {
        chatController.getMessages(req, res);
    });


}