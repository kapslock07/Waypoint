import React from 'react';
import './Compose.css';

export default function Compose(props) {
  return (
    <div className="compose">
      <form onSubmit={() => console.log("FUCK")}>

        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
        />
        <button onClick={props.handleMessageSubmit}>Chat!</button>

      </form>

      {
        props.rightItems
      }
    </div>
  );
}