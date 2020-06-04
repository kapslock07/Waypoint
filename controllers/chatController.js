var db = require("../models");
const sequelize = require("sequelize");

module.exports = {

    getChat: function(req, res){
        let userId = req.params.id;
    
        db.Chat.findAll({
            where: sequelize.or(
                {creatorId: userId},
                {joineeId: userId}
            ),
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
            }).then(joineeData => {

                db.Chat.findOne({
                    where: sequelize.or(
                        {creatorId: data.creatorId, joineeId: data.joineeId},
                        {creatorId: data.joineeId, joineeId: data.creatorId}
                    )
                }).then(async foundChat => {
                    if(foundChat === null){
                        
                        let newChat = await db.Chat.create({
                            creatorId: data.creatorId,
                            joineeId: data.joineeId  
                        })
                        await newChat.addUsers([creatorData, joineeData]);
                    }
                    else {
                     //   console.log("FOUND CHAT WITH " + data.creatorId + " " + data.joineeId);
                        res.status(200).end();
                    }
                });
            });
        });
    },
    getMessages: function(req, res){
        let chatId = req.params.id;

     //   console.log("LOOKING FOR MSGS AT " + chatId)

        db.Chat.findOne({
            where: {
                id: chatId
            },
            include: [db.Message]
        }).then(chatData => {
            res.json(chatData.Messages);
        }).catch(err => console.log(err));
    },
    createMessage: function(data){
        return new Promise((resolve, reject) => {
            db.Chat.findOne({
                where: {
                    id: data.ChatId
                }
            }).then(async chat => {
                let newMsg = await db.Message.create({
                    authorId: data.authorId,
                    message: data.message
                });
                await chat.addMessage(newMsg);
                resolve(newMsg);
            });
        });
    }
}