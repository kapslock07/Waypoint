//This is for instant messaging funcitonality

module.exports = (app) => {
    const chatServer = require('http').createServer(app);
    const io = require('socket.io')(chatServer);
    io.on('connection', (socket) => {
    
    
      console.log("Client Connected");
      io.emit('test', { test: 'hello world!' }); //emits a test event 
    
    
      socket.on('disconnect', () => { //handles disconnect
        io.emit('user disconnected');
        console.log("Client Disconnected");
      });
    });
    chatServer.listen(3002);
}
