import React, { createContext, useReducer, useContext } from "react";
import chatActions from "./chatActions";

const ChatContext = createContext();
const { Provider } = ChatContext;

const reducer = (state, action) => {
    switch(action.type){
        case(chatActions.SEND_CHAT):
            console.log("send chat!");
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

    return <Provider value={[state, dispatch]} {...props} />;
}

const useChatContext = () => {
    return useContext(ChatContext);
}

export { ChatProvider, useChatContext };