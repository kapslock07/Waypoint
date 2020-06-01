import React, { useState, useEffect } from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';
import { useChatContext } from "../../utils/contexts/chatContext";
import API from "../../utils/API";

import './Messenger.css';

export default function Messenger(props) {

  const [conversations, setConversations] = useState([]);
  const [state, dispatch] = useChatContext();


  useEffect(() => {
    getConversations()
  },[])

 const getConversations = () => {
   API.getChats(state.user.id).then(res => console.log(res));
  /*  axios.get('https://randomuser.me/api/?results=20').then(response => {
        let newConversations = response.data.results.map(result => {
          return {
            photo: result.picture.large,
            name: `${result.name.first} ${result.name.last}`,
            text: 'Hello '
          };
        });
        setConversations([...conversations, ...newConversations])
    });*/
  }


  return (
    <div className="messenger">

      <Toolbar
        leftItems={[
          <ToolbarButton key="cog" icon="ion-ios-cog" />
        ]}
        rightItems={[
          <ToolbarButton key="add" icon="ion-ios-add-circle-outline" />
        ]}
      />

      <div className="scrollable sidebar">
        <ConversationList conversations={[]}/>
      </div>

      <div className="scrollable content">
        <MessageList messages={[]} MY_USER_ID={state.user.id}/>
      </div>
    </div>
  );
}