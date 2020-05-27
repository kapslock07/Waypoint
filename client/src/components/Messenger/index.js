import React from 'react';
import ConversationList from '../ConversationList';
import MessageList from '../MessageList';
import Toolbar from '../Toolbar';
import ToolbarButton from '../ToolbarButton';

import './Messenger.css';

export default function Messenger(props) {
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
        <ConversationList />
      </div>

      <div className="scrollable content">
        <MessageList />
      </div>
    </div>
  );
}