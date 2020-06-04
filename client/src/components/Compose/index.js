import React, { useRef, useState } from 'react';
import { MDBBtn} from "mdbreact";
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

    <div className="form-group basic-textarea">
        <textarea 
          ref={inputRef}
          onChange={handleInputChange}
          value={compose}
        
          className="form-control pl-2 my-0" 
          id="exampleFormControlTextarea2" 
          rows="3"
          placeholder="Type your message here..." />
        <MDBBtn
            color="info"
            rounded
            size="sm"
            className="float-right mt-4"
            onClick={handleSendMessage}
          >   
            Send
        </MDBBtn>
    </div>
  );
}