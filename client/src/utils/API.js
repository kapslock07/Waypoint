import axios from "axios";

export default {
    //Get All Users
    getUsers: function(){
        return axios.get("/api/users");
    },
    //Get All Games
    getGames: function(){
        return axios.get("/api/games");
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
    }
};

