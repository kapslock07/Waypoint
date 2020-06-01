import React, {useEffect} from 'react';
import shave from 'shave';

import './ConversationListItem.css';

export default function ConversationListItem(props) {
  useEffect(() => {
    shave('.conversation-snippet', 20);
  })
  
    return (
      <div className="conversation-list-item">
        <img className="conversation-photo" src={props.data.photo} alt="..." />
        <div className="conversation-info">
          <h1 className="conversation-title">{props.data.name}</h1>
          <p className="conversation-snippet">{""}</p>
        </div>
      </div>
    );
}