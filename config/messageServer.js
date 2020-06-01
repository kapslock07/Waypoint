//This is for instant messaging funcitonality

module.exports = (app) => {


    const chatServer = require('http').createServer(app);
    let io = require('socket.io')(chatServer);

    let connectedUsers = []; //this is where we store connected users


    io.on('connection', (socket) => {

        socket.on("user_connect", (data) => {
            connectedUsers.push(data);
            console.log("saved user")
            console.log("Client Connected id: " + data);
            socket.emit("user_connect", data);
        });
    
    
      
    
    
    });

    chatServer.listen(3002, () => {
        console.log("Chat server started 🖥");
    });
}
