import React, { useState, useEffect } from "react";
import { MDBCard, MDBCardBody, MDBRow, MDBCol, MDBListGroup } from "mdbreact";
import Friend from "../Friend";
import "./index.css";
import actions from "../../utils/contexts/chatActions";
import { useChatContext } from "../../utils/contexts/chatContext";
import API from "../../utils/API";
import MessageList from "../MessageList";


export default function NewChat(props){

    const [title, setTitle] = useState("");
    const [conversations, setConversations] = useState([]);
    const [state, dispatch] = useChatContext();


    useEffect(() => {
        getConversations();
    },[])

    const getMessages = (chatId, chatWithId, nameOfChatter) => {
        API.getMessages(chatId).then(res => {
    
          let msgData = res.data;
          dispatch({type: actions.SELECT_USER, id: chatWithId, chatId: chatId, messages: msgData}) //select the user that was clicked
          setTitle(nameOfChatter);
        });
      }
    
     const getConversations = () => {
         dispatch({ type: actions.RESET });
        API.getChats(state.user.id).then(res => {
    
            let chats = res.data;
            let convoUsers = [];
        
            chats.forEach(chat => { //for every chat we have
              //get the user thats not us
              let userThatsNotMe = chat.Users.filter(user => user.id !== state.user.id);
              
              //push a shortened object version of them to convoUsers
              convoUsers.push({
                    id: userThatsNotMe[0].id,
                    name: userThatsNotMe[0].userName,
                    avatar: userThatsNotMe[0].profileImage,
                    chatId: userThatsNotMe[0].UserChats.ChatId
                  });
            });
            setConversations(convoUsers);//set the convoUsers to state
        });
      }


      return (
          <div>
            <MDBCard className="grey lighten-3 chat-room">
                <MDBCardBody>
                    <MDBRow className="px-lg-2 px-2">
                        <MDBCol md="4" xl="4" className="px-0 mb-4 mb-md-0 scrollable-friends-list">
                            <h6 className="font-weight-bold mb-3 text-lg-left">Member</h6>
                            <div className="white z-depth-1 p-3">
                                <MDBListGroup className="friend-list">
                                    {console.log(conversations), conversations.map(conversation => (
                                        <Friend key={conversation.id}
                                        data={conversation}
                                        getMessages={getMessages} />
                                    ))}
                                </MDBListGroup>
                            </div>
                        </MDBCol>
                        <MDBCol md="8" xl="8" className="pl-md-3 mt-4 mt-md-0 px-lg-auto">
                            <div className="scrollable-chat">
                                <MDBListGroup className="list-unstyled pl-3 pr-3">
                                    <MessageList MY_USER_ID={state.user.id} SelectedUser={title}/>
                                </MDBListGroup>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}



