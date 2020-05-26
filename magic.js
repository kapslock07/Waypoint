const axios = require("axios");
const fs = require("fs");


let searchArray = [
    "Rocket League",
    "League of Legends",
    "Counter-Strike Global Offensive",
    "Call of Duty Warzone",
    "Overwatch",
    "Rainbow Six Siege",
    "Fortnite",
    "FIFA 19"
]

function start(){
    
    let oldData =  JSON.parse(fs.readFileSync("./seeds/cusjson.json", "utf-8"));

    searchArray.forEach(async e => {
        oldData.push(await loadSearch(e));
        console.log("pushed");
        console.log(oldData);
        fs.writeFileSync("./seeds/cusjson.json", JSON.stringify(oldData));
    });
}

function loadSearch(title){
    return new Promise((resolve, reject) => {
        searchGame(title).then(res => {

            let data = res.data.results[0];

            let newData = {
                title: data.name,
                platforms: data.platforms,
                image: data.background_image,
                short_screenshots: data.short_screenshots,
                genres: data.genres
            }
            
            resolve(newData);
        });
    })
}

function searchGame(title){
    return axios.get(`https://api.rawg.io/api/games?search=${title}&page_size=1`);
}

start();

