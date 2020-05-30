const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();
const session = require("express-session");
// Requiring passport as we've configured it
const passport = require("./config/passport");

const PORT = process.env.PORT || 3001;
var db = require("./models"); //grabs database models

app.use([express.urlencoded({ extended: true }), express.json()]);
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

//This is for instant messaging funcitonality
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

//including API routes here, passes server and db through to routes
require("./routes/apiRoutes")(app, db);
//including Chat Routes
require("./routes/chatRoutes")(app, db);
//including authentication routes here
require("./routes/authenticationRoute.js")(app);

//might need to check if in production/dev
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

db.sequelize.sync().then(function () {
  //syncs our models to database, remove 'force: true' in production so we dont destroy our data
  app.listen(PORT, function () {
    console.log("🚀  API server now on port", PORT);
  });
});
