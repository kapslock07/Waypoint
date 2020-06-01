import React, { createContext, useReducer, useContext } from "react";
import io from "socket.io-client";
import chatActions from "./chatActions";
import API from "../API";

const ChatContext = createContext();
const { Provider } = ChatContext;

const reducer = (state, action) => {
    switch(action.type){
        case(chatActions.LOAD_IO):
            loadSocket(state);
            break;
        case(chatActions.CREATE_CHAT):
            console.log("Create Chat with " + action.creatorId + " and " + action.joineeId);
            createChat(action.creatorId,action.joineeId);
            break;
        case(chatActions.SEND_MESSAGE):
            console.log("Send chat!");
            break;
        case(chatActions.GET_CHATS):
            console.log("Get chats!");
            break;
        default:
            throw new Error(`invalid action type: ${action.type}`);
    }
}

const ChatProvider = ({ userObj = {}, ...props}) => {
    const [state, dispatch] = useReducer(reducer, { user: userObj });
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
}


function loadSocket(state){ //connects to socket on server whoo!
    console.log("LOAD SOCKET!")
    let socket = io('http://localhost:3002');

    socket.emit("user_connect", state.user.id);

    socket.on("user_connect", (data) => { //Listen from server
        console.log("HEARD SOMETHING FROM SERVER");
      console.log("Connected to Chat Server with Id of ", data);
    });
}

export { ChatProvider, useChatContext };