import React, { useState, useEffect } from "react";
import {
    MDBCard, MDBCardBody, MDBRow, MDBCol, MDBListGroup, MDBListGroupItem, MDBBadge, MDBIcon,
    MDBBtn
} from "mdbreact";
import Friend from "../Friend";
import "./index.css";
import actions from "../../utils/contexts/chatActions";
import { useChatContext } from "../../utils/contexts/chatContext";
import API from "../../utils/API";
import MessageList from "../MessageList";


export default function NewChat(props){

    const [conversations, setConversations] = useState([]);
    const [state, dispatch] = useChatContext();


    useEffect(() => {
        getConversations()
    },[])

    const getMessages = (chatId, chatWithId) => {
        API.getMessages(chatId).then(res => {
    
          let msgData = res.data;
          dispatch({type: actions.SELECT_USER, id: chatWithId, chatId: chatId, messages: msgData}) //select the user that was clicked
        });
      }
    
     const getConversations = () => {
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
                        <MDBCol md="6" xl="4" className="px-0 mb-4 mb-md-0 scrollable-friends-list">
                            <h6 className="font-weight-bold mb-3 text-lg-left">Member</h6>
                            <div className="white z-depth-1 p-3">
                                <MDBListGroup className="friend-list">
                                    {conversations.map(conversation => (
                                        <Friend key={conversation.id}
                                        data={conversation}
                                        getMessages={getMessages} />
                                    ))}
                                </MDBListGroup>
                            </div>
                        </MDBCol>
                        <MDBCol md="6" xl="8" className="pl-md-3 mt-4 mt-md-0 px-lg-auto">
                            <div className="scrollable-chat">
                                <MDBListGroup className="list-unstyled pl-3 pr-3">
                                    <MessageList MY_USER_ID={state.user.id}/>
                                </MDBListGroup>
                            </div>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
}
  
     /*   this.state = {
            friends: [
                {
                    name: "John Doe",
                    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-8",
                    message: "Hello, Are you there?",
                    when: "Just now",
                    toRespond: 1,
                    seen: false,
                    active: true
                },
                {
                    name: "Danny Smith",
                    message: "Lorem ipsum dolor sit",
                    avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-1",
                    when: "5 min ago",
                    toRespond: 0,
                    seen: false,
                    active: false
                },
                {
                    name: "Alex Steward",
                    message: "Lorem ipsum dolor sit",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-2",
                    when: "Yesterday",
                    toRespond: 0,
                    seen: false,
                    active: false
                },
                {
                    name: "Ashley Olsen",
                    message: "Lorem ipsum dolor sit",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-3",
                    when: "Yesterday",
                    toRespond: 0,
                    seen: false,
                    active: false
                },
                {
                    name: "Kate Moss",
                    message: "Lorem ipsum dolor sit",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-4",
                    when: "Yesterday",
                    toRespond: 0,
                    seen: true,
                    active: false
                },
                {
                    name: "Lara Croft",
                    message: "Lorem ipsum dolor sit",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
                    when: "Yesterday",
                    toRespond: 0,
                    seen: false,
                    active: false
                },
                {
                    name: "Brad Pitt",
                    message: "Lorem ipsum dolor sit",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
                    when: "5 min ago",
                    toRespond: 0,
                    seen: true,
                    active: false
                },
                {
                    name: "Ken Ditto",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(3).jpg",
                    message: "Hello, Are you there?",
                    when: "Yesterday",
                    toRespond: 0,
                    seen: false,
                    active: false
                },
                {
                    name: "Marta Wozniak",
                    message: "Lorem ipsum dolor sit.",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/img(2).jpg",
                    when: "5 min ago",
                    toRespond: 0,
                    seen: false,
                    active: false
                }
            ],
            messages: [
                {
                    author: "Brad Pitt",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
                    when: "12 mins ago",
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo",
                },
                {
                    author: "Lara Croft",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
                    when: "13 mins ago",
                    message:
                        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                    author: "Brad Pitt",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
                    when: "14 mins ago",
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo",
                },
                {
                    author: "Lara Croft",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-5",
                    when: "16 mins ago",
                    message:
                        " Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium."
                },
                {
                    author: "Brad Pitt",
                    // avatar: "https://mdbootstrap.com/img/Photos/Avatars/avatar-6",
                    when: "17 mins ago",
                    message:
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolo",
                }
            ]
        };
    



*/


