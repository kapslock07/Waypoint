import axios from "axios";



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
        return axios.get("/api/avatars");
    },
    putOnboardData: function(data){
        return axios.put("/api/users", data)
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
    },
    getMessages: function(chatId){
        return axios.get(`/api/chat/messages/${chatId}`)
    }
};

