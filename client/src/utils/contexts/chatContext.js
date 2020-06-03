import React, { createContext, useReducer, useContext } from "react";
import io from "socket.io-client";
import chatActions from "./chatActions";
import API from "../API";

const ChatContext = createContext();
const { Provider } = ChatContext;

let socket;

const reducer = (state, action) => {
    switch(action.type){
        case(chatActions.LOAD_IO):
            loadSocket(state);
            break;
        case(chatActions.CREATE_CHAT):
            console.log("Create Chat with " + action.creatorId + " and " + action.joineeId);
            createChat(action.creatorId,action.joineeId);
            return [...state]
        case(chatActions.SELECT_USER):
            return { ...state, chattingWith: action.id }
        case(chatActions.SEND_MESSAGE):
            sendMessage();
            break;
        case(chatActions.GET_CHATS):
            console.log("Get chats!");
            break;
        default:
            throw new Error(`invalid action type: ${action.type}`);
    }
}

const ChatProvider = ({ userObj = {}, ...props}) => {
    const [state, dispatch] = useReducer(reducer, { user: userObj, chattingWith: 0 });

    if(props.startChat){
        loadSocket(state);
    }

    return <Provider value={[state, dispatch]} {...props} />;
}

const useChatContext = () => {
    return useContext(ChatContext);
}

function createChat(creatorId,joineeId){
    let data = {
        creatorId: creatorId,
        joineeId: joineeId
    }

    API.createChat(data);

    socket.emit("created_chat", {
        creatorId: creatorId,
        joineeId: joineeId
    });
}


function loadSocket(state){ //connects to socket on server whoo!
    console.log(state);
 
        socket = io('http://localhost:3002');
    
        socket.emit("user_connect", state.user.id);
    
        socket.on("user_connect", (data) => { //Listen from server
          console.log("Connected to Chat Server with Id of ", data);
        });
    
        socket.on("created_chat", data => { //Listen from server
            console.log(`user with id ${data.creatorId} wants to chat!`);
        });
}


function sendMessage(message){

}

export { ChatProvider, useChatContext };