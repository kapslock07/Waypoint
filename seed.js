let db = require("./models");
let json = require("./seeds/cusjson.json");


function fillDatabase(){

    json.forEach(e => {
        db.Games.create(e);
    });


}


fillDatabase();


