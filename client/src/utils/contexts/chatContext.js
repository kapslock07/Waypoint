import React, { createContext, useReducer, useContext } from "react";

const ChatContext = createContext();
const { Provider } = ChatContext;

const reducer = (state, action) => {
    switch(action.type){
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