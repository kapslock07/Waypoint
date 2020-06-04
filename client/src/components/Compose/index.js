import React, { useRef, useState } from 'react';
import './Compose.css';
import actions from "../../utils/contexts/chatActions";
import { useChatContext } from "../../utils/contexts/chatContext";

export default function Compose(props) {

  const [state, dispatch] = useChatContext();
  const inputRef = useRef();
  const [compose, setCompose] = useState("");

  const handleInputChange = e => {
    e.preventDefault();
    setCompose(inputRef.current.value);
  }

  const handleSendMessage = e => {
    e.preventDefault();
    dispatch({type: actions.SEND_MESSAGE, message: compose.trim()});
    setCompose("");
  }


  return (
    <div className="compose">
      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          className="compose-input"
          placeholder="Type a message"
          ref={inputRef}
          onChange={handleInputChange}
          value={compose}
        />
        <button onClick={handleSendMessage}>Chat!</button>

      </form>

      {
        props.rightItems
      }
    </div>
  );
}