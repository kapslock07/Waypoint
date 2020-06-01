let db = require("./models");
let json = require("./seeds/cusjson.json");
let platJson = require("./seeds/platforms.json");
let avatarJson = require("./seeds/userImage.json");


function fillDatabase(){

    console.log("Importing Games...");
    json.forEach(e => {
        db.Games.create(e);
        console.log(".");
    });
    console.log("DONE!");

    console.log("Importing Platforms...");
    platJson.forEach(e => {
        db.Platform.create(e);
        console.log(".");
    });
    console.log("DONE!");

    console.log("Importing Avatars...");
    avatarJson.forEach(e => {
        db.Avatar.create(e);
        console.log(".");
    });
    console.log("DONE!");

    return;
}


fillDatabase();


