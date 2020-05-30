import React, { createContext, useReducer, useContext } from "react";
import io from "socket.io-client";
import chatActions from "./chatActions";
import API from "../API";

const ChatContext = createContext();
const { Provider } = ChatContext;

const reducer = (state, action) => {
    switch(action.type){
        case(chatActions.LOAD_IO):
            loadSocket();
            break;
        case(chatActions.CREATE_CHAT):
            console.log("Create Chat with " + action.creatorId + " and " + action.joineeId);
            createChat(action.creatorId,action.joineeId);
            break;
        case(chatActions.SEND_CHAT):
            console.log("Send chat!");
            break;
        case(chatActions.GET_CHATS):
            console.log("Get chats!");
            break;
        default:
            throw new Error(`invalid action type: ${action.type}`);
    }
}

const ChatProvider = ({ userObj = [], ...props}) => {
    const [state, dispatch] = useReducer(reducer, { user: userObj });

    if(props.startChat){
        loadSocket();
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
}


function loadSocket(){ //connects to socket on server whoo!
    const socket = io.connect('http://localhost:3002');
    socket.on('test', (data) => { //catches 'test' event
      console.log(data);
    });
}

export { ChatProvider, useChatContext };