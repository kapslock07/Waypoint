import axios from "axios";
import fs from "fs";
import path from "path";
const userImageDirectory = path.join(__dirname + "../assets/userImages");

export default {
    //Get All Users
    getUsers: function(){
        return axios.get("/api/users");
    },
    getPlatforms: function(){
        return axios.get("/api/platforms");
    },
    //Get All Games
    getGames: function(){
        return axios.get("/api/games");
    },
    //Get Avatars(local)
    getAvatars: function(){
        fs.readdir(userImageDirectory, (err, files) => {
            if(err){
                throw new Error(err);
            }

            console.log(files);
        });
    },
    //Search Games by Title
    searchGamesT: function(title){
        return axios.get(`/api/games/${title}`);
    },
    //Search Games by Title and Platform
    searchGamesTP: function(title, platform){
        return axios.get(`/api/games/${platform}/${title}`);
    },
    addUserToGames: function(titles, userId){
        return axios.post("/api/games", {
            titles: titles,
            userId: userId
        });
    },
    createChat: function(data){
        return axios.post("/api/chat", {
            data: data
        });
    },
    getChats: function(id){
        return axios.get(`/api/chat/${id}`);
    }
};

