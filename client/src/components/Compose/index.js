import React from 'react';
import './Compose.css';

export default function Compose(props) {
  return (
    <div className="compose">
      <input
        type="text"
        // className="compose-input"
        placeholder="Type a message, @name"
        onChange={props.handleTyping}
        style={{ width: "72%" }}
      />

      <button onClick={props.handleMessageSubmit}>Chat!</button>

      {
        props.rightItems
      }
    </div>
  );
}