import React from "react";
import { MDBBtn } from 'mdbreact';

import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function ChatBtn(props) {
    return (
        <MDBBtn
            rounded
            type="button"
            className="chatBtn z-depth-2 aqua-gradient mt-3"
            href="/chat"
            size="sm"
        >
            Chat
        </MDBBtn>

    );
}

export default ChatBtn;
