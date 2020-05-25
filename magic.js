const axios = require("axios");
const fs = require("fs");


const searchTitle = "Rocket League" // change this to search


function readFromFile(){
    fs.readFile("./seeds/cusjson.json", "utf-8", (err, data) => {
        if (err) throw err;

        console.log(JSON.parse(data));
        searchGame(searchTitle, JSON.parse(data));
    });
}

function searchGame(title, oldData){
    axios.get(`https://api.rawg.io/api/games?search=${title}&page_size=1`).then(res => {
    
        //console.log(res.data.results[0])
        data = res.data.results[0];
        
        writeToFile(data, oldData);
    });
}

function writeToFile(data, oldData){

    oldData.push(data);


    fs.writeFile("./seeds/cusjson.json", JSON.stringify(oldData), (err) => {

        err ? console.log(err) : console.log("success");
    })
}



readFromFile();