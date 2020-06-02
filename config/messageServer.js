//This is for instant messaging funcitonality

module.exports = (app) => {


    const chatServer = require('http').createServer(app);
    let io = require('socket.io')(chatServer);

    let connectedUsers = new Map(); //this is where we store connected users


    io.on('connection', (socket) => {

        socket.on("user_connect", (data) => { //when a client connects to the server
            
            connectedUsers.set(data, {
                sId: socket.id,
                uId: data
            });

            console.log("Total Users Online", connectedUsers.size);
            socket.emit("user_connect", connectedUsers.get(data).sId);
        });

        socket.on("created_chat", (data) => { //when a client creates a chat with another user
            //get client who will recieve chat notification!
            let reciever = connectedUsers.get(data.joineeId);
            
            if(reciever.sId === undefined){
                console.log("One user not online")
            }
            else {
                io.to(reciever.sId).emit("created_chat", { //have this feature either send if online, or instead just add chat notification in db?
                    creatorId: data.creatorId
                });
            }
        });

        socket.on("disconnect", () => {
            connectedUsers.forEach(e => {
                if(e.sId == socket.id){
                   connectedUsers.delete(e.uId);
                }
            });
        });
    });

    chatServer.listen(3002, () => {
        console.log("Chat server started 🖥");
    });
}
