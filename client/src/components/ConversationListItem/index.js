import React, {useEffect} from 'react';
import shave from 'shave';
import { useChatContext } from "../../utils/contexts/chatContext";

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  const [state] = useChatContext();


  useEffect(() => {
    shave('.conversation-snippet', 20);
  })
   
    return (
      <div className={state.chattingWith === props.data.id ? "conversation-list-item selected" : "conversation-list-item"} onClick={() => props.getMessages(props.data.chatId, props.data.id)}>
        <img className="conversation-photo" src={props.data.photo} alt="..." />
        <div className="conversation-info">
          <h1 className="conversation-title">{props.data.name}</h1>
          <p className="conversation-snippet">{""}</p>
        </div>
      </div>
    );
}