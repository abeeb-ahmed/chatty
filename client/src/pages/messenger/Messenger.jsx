import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import Online from "../../components/online/Online";
import "./messenger.scss";

const Messenger = () => {
  const user = useSelector((state) => state.auth.user);
  const userId = user._id;
  const [conversations, setConversations] = useState([]);
  const [currentConvo, setCurrentConvo] = useState(null);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    const getConversations = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/conversations/${userId}`
        );
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [userId]);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await axios(
          `http://localhost:5000/api/messages/${currentConvo?._id}`
        );
        setMessages(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getMessages();
  }, [currentConvo]);

  // const handleSend = (e) => {
  //   e.preventDefault();
  //   const sendMessage = async () => {
  //     try {
  //       await axios.post("");
  //     } catch (error) {}
  //   };
  // };

  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="messenger_container">
          <div className="messenger_left">
            <input type="text" placeholder="Search for friends" />
            {conversations?.map((c) => {
              return (
                <div key={c._id} onClick={() => setCurrentConvo(c)}>
                  <Conversation currentUser={user} conversation={c} />
                </div>
              );
            })}
          </div>
          <div className="messenger_middle">
            {currentConvo ? (
              <div className="messenger_middleText">
                {messages.map((m) => (
                  <Message
                    key={m._id}
                    message={m}
                    own={m.senderId === userId}
                  />
                ))}
              </div>
            ) : (
              <div className="noConvo">
                <h2>No conversation selected</h2>
              </div>
            )}

            <div className="messenger_middleInput">
              <textarea
                placeholder="Enter message"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
              />
              <div>
                <button className="btn">Send</button>
              </div>
            </div>
          </div>
          <div className="messenger_right">
            <h4>Online Friends</h4>
            <Online />
          </div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
