import React from "react";
import { MDBCard, MDBCardBody } from "mdbreact";

export default function ChatMessage(props){

    console.log(props.message)


    return (
        <li className="chat-message d-flex justify-content-between mb-4">
           
            {/* <MDBAvatar
                tag="img"
                src={avatar}
                alt="avatar" <img className="conversation-photo" src={props.data.avatar} alt="..." />
                circle
                className="mx-2 z-depth-1"
            />*/ }
            <MDBCard>
                <MDBCardBody>
                    <div>
                        <strong className="primary-font">{}</strong>
                        <small className="pull-right text-muted">
                            <i className="far fa-clock" /> {props.message.message}
                        </small>
                    </div>
                    <hr />
                    <p className="mb-0">{}</p>
                </MDBCardBody>
            </MDBCard>
        </li>
    );
}