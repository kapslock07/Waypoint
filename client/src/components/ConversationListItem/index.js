import React, {useEffect} from 'react';
import shave from 'shave';
import { useChatContext } from "../../utils/contexts/chatContext";
import chatActions from "../../utils/contexts/chatActions";

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  const [state, dispatch] = useChatContext();

  useEffect(() => {
    shave('.conversation-snippet', 20);
  })
  
    return (
      <div className={state.chattingWith === props.data.id ? "conversation-list-item selected" : "conversation-list-item"} onClick={() => { props.getMessages(props.data.chatId); dispatch({type: chatActions.SELECT_USER, userid: props.data.id})  }}>
        <img className="conversation-photo" src={props.data.photo} alt="..." />
        <div className="conversation-info">
          <h1 className="conversation-title">{props.data.name}</h1>
          <p className="conversation-snippet">{""}</p>
        </div>
      </div>
    );
}