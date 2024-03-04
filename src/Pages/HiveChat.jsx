import React from "react";
 import button1 from "../assets/navbutton.png"
// import user2 from "../assets/user2.png"
import { useState ,useEffect} from "react";
import "../App.css"
import  Progress  from "../Components/ProgressBar";
import  Progress2  from "../Components/ProgressBar2";
import NavBar from "../Components/NavBar";

const user1 = {
              id: '123456789',
              name: 'Alice',
              email: 'alice@example.com',
              photoUrl: 'https://talkjs.com/images/avatar-1.jpg',
              welcomeMessage: 'Hey there! How are you? :-)',
              role: 'default',
            };
          
            const user2 = {
              id: '987654321',
              name: 'Sebastian',
              email: 'Sebastian@example.com',
              photoUrl: 'https://talkjs.com/images/avatar-5.jpg',
              welcomeMessage: 'Hey, how can I help? https://google.com',
              role: 'default',
            };
            const HiveChat = () => {
                const [userOneChat, setUserOneChat] = useState("");
                const [userTwoChat, setUserTwoChat] = useState("");
                const [chatDialogue, setChatDialogue] = useState("");
                const [userOneButtonDisabled, setUserOneButtonDisabled] = useState(false);
                const [userTwoButtonDisabled, setUserTwoButtonDisabled] = useState(false);
              
           
                useEffect(() => {
                  const storedChatDialogue = localStorage.getItem("chatDialogue");
                  if (storedChatDialogue) {
                    setChatDialogue(storedChatDialogue);
                  }
                }, []);
              
              
                const updateChatDialogue = (newChatDialogue) => {
                  setChatDialogue(newChatDialogue);
                  localStorage.setItem("chatDialogue", newChatDialogue);
                };
              
                const handleSendUserOneChat = (e) => {
                  e.preventDefault();
                  if (userOneChat.trim() !== "") {
                    const updatedChatDialogue = `${chatDialogue}${user1.name}: ${userOneChat}\n`;
                    updateChatDialogue(updatedChatDialogue);
                    setUserOneChat("");
                    setUserOneButtonDisabled(true);
                    setTimeout(() => {
                      setUserOneButtonDisabled(false);
                    }, 500); 
                  }
                };
              
                const handleSendUserTwoChat = (e) => {
                  e.preventDefault();
                  if (userTwoChat.trim() !== "") {
                    const updatedChatDialogue = `${chatDialogue}${user2.name}: ${userTwoChat}\n`;
                    updateChatDialogue(updatedChatDialogue);
                    setUserTwoChat("");
                    setUserTwoButtonDisabled(true);
                    setTimeout(() => {
                      setUserTwoButtonDisabled(false);
                    }, 500); 
                  }
                };
              
              
                const formatChatDialogue = () => {
                  return chatDialogue.split("\n").map((message, index) => {
                    if (message.startsWith(`${user1.name}`)) {
                      return (
                        <p key={index} className="user1-message">
                          {message}
                        </p>
                      );
                    } else if (message.startsWith(`${user2.name}`)) {
                      return (
                        <p key={index} className="user2-message">
                          {message}
                        </p>
                      );
                    }
                    return null;
                  });
                };
              
                return (
                    
                  <>
                    <div className="chat-background">
                      <div id="container">
                        <div className="frame">
                          <div className="div2">
                            <header id="chat" className="header">
                              <h1>{user2.name}</h1>
                            </header>
                            <Progress id='user1-goal'/>
                           
                            <form id="form" onSubmit={handleSendUserOneChat}>
                              <div>
                                <img src={user1.photoUrl} alt="User 1" id="user1" />
                                <input
                                  id="user1-txt"
                                  type="text"
                                  value={userOneChat}
                                  onChange={(e) => {
                                    setUserOneChat(e.target.value);
                                  }}
                                />
                              </div>
                              <button type="submit" id="user1-send" disabled={userOneButtonDisabled}>
                                SEND
                              </button>
                            </form>
                            <div id="interaction">{formatChatDialogue()}</div>
                              <Progress2 id='p-user2'/>
                            
                            <form id="form-2"onSubmit={handleSendUserTwoChat}>
                              <button id="user2-send"type="submit" disabled={userTwoButtonDisabled}>Send</button>
                              <br />
                              <img src={user2.photoUrl} alt="User 2" id="user2" />
                              <input
                                id="user2-txt"
                                type="text"
                                value={userTwoChat}
                                onChange={(e) => {
                                    setUserTwoChat(e.target.value);
                                }}
                                />
                            </form>
                            <NavBar/>
                    {/* <footer className="text-wrapper-10">
                        <div>
                            <img id="button1" src={button1}/>

                        </div>
                    </footer> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              };
              
              export default HiveChat;

