const express = require("express");
const path = require("path");
require("dotenv").config();
const app = express();


const PORT = process.env.PORT || 3001;
var db = require("./models"); //grabs database models

app.use([
  express.urlencoded({ extended: true }),
  express.json()
]);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


db.sequelize.sync( { force: true } ).then(function() { //syncs our models to database, remove 'force: true' in production so we dont destroy our data
  app.listen(PORT, function() {
    console.log("🚀  API server now on port", PORT);
  });
});
