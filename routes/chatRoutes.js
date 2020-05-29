const isAuthenticated = require("../config/middleware/isAuthenticated");
const sequelize = require("sequelize");


module.exports = (server, db) => {

    //create routes here to manage chat db

    //https://sequelize.org/master/manual/creating-with-associations.html  <-- refrence theses docs when creating this

    server.get("/chats", (req, res) => {
        let id = req.body.id;

        db.Chat.findAll({
            where: {
                
            }
        })
    });


}