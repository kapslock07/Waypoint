var db = require("../models");

module.exports = {

    getChat: function(req, res){
        let creatorId = req.params.id;
    
        db.Chat.findAll({
            where: {
                creatorId: creatorId
            },
            include: [db.Message, db.User]
        }).then(data => {
            res.json(data);
        });
    },
    createChat: function(req, res){
        let data = req.body.data;
        
        db.User.findOne({
            where: {
                id: data.creatorId
            }
        }).then(creatorData => {
            db.User.findOne({
                where: {
                    id: data.joineeId
                }
            }).then(async joineeData => {

                let newChat = await db.Chat.create({
                        creatorId: data.creatorId,
                        joineeId: data.joineeId  
                })
                newChat.addUsers([creatorData, joineeData]);

                res.status(200).end();
            })
        });
    },
    getMessages: function(req, res){
        let chatId = req.params.id;

        db.Chat.findOne({
            where: {
                id: chatId
            },
            include: [db.Message]
        }).then(chatData => {
            console.log(chatData);
        });
    }
}