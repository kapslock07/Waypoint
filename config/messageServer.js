//This is for instant messaging funcitonality

module.exports = (app) => {


    const chatServer = require('http').createServer(app);
    let io = require('socket.io')(chatServer);

    let connectedUsers = []; //this is where we store connected users


    io.on('connection', (socket) => {

        socket.on("user_connect", (data) => { //when a client connects to the server
            
            console.log(data)
            connectedUsers[data] = socket.id;
            console.log("saved user")
            console.log("Total Users ", connectedUsers);
            socket.emit("user_connect", connectedUsers[data]);
        });

        socket.on("created_chat", (data) => { //when a client creates a chat with another user
            //get client who will recieve chat notification!
            let socketId = connectedUsers[data.joineeId];
            
            if(socketId === undefined){
                console.log("One user not online")
            }
            else {
                io.to(socketId).emit("created_chat", {
                    creatorId: data.creatorId
                });
            }
        });
    
    
      
    
    
    });

    chatServer.listen(3002, () => {
        console.log("Chat server started 🖥");
    });
}
