var db = require("../models");

module.exports = {
    createChat: function(req, res){
        let data = req.body.data;
        
        db.User.findOne({
            where: {
                id: data.creatorId
            }
        }).then(creatorData => {
            console.log("USER CHECK ", creatorData instanceof db.User)
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

                db.Chat.findOne({
                    where: {
                        id: newChat.id
                    },
                    include: [db.Message, db.User]
                }).then(data => {
                    console.log(data);
                })
                
    
                res.status(200).end();
            })
        });
    }
}