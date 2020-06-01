import React from "react";
import { MDBBtn } from 'mdbreact';
import { useChatContext } from "../../utils/contexts/chatContext";
import actions from "../../utils/contexts/chatActions";

import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ChatBtn(props) {

    const [state, dispatch] = useChatContext();

    return (
        <MDBBtn
            rounded
            type="button"
            className="chatBtn z-depth-2 aqua-gradient mt-3"
            size="sm"
            href="/chat"
            onClick={() => {dispatch({ type: actions.CREATE_CHAT, creatorId: state.user.id, joineeId: props.joineeId })}}
        >
            Chat
        </MDBBtn>

    );
}

export default ChatBtn;
