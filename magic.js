require("dotenv").config();
const axios = require("axios");
const fs = require("fs");


let completeData = [];

function grabData(){


    axios({
        url: "https://api-v3.igdb.com/search/",
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'user-key': process.env.APIKEY
        },
        data: `fields *; search "Rocket League";`
      })
        .then(response => {
            //console.log(response.data);
            completeData = response.data;

            completeData = grabCover(completeData);
            console.log(completeData)
        })
        .catch(err => {
            console.error(err);
        });
}

function grabCover(data){

     data.forEach( async e => {
        let cover = await axiosCover(e.cover);
        e.cover = cover;
    });

    return data;
}

function axiosCover(id){

    return new Promise((resolve, reject) => {

        id ?
            axios({
                url: `https://api-v3.igdb.com/covers`,
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'user-key': process.env.APIKEY
                },
                data: `fields url,game; where id = ${id};`
            })
                .then(response => {
                    console.log(response.data[0].url)
                resolve(response.data[0].url);
                })
                .catch(err => {
                    reject(err);
                })

        : resolve("none");
    })
}

//grabData();

function searchGame(title){
    axios.get(`https://api.rawg.io/api/games?search=${title}`).then(res => {
    
        console.log(res.data.results[0])
        
        writeToFile(data);
    });
}

function writeToFile(data){

}