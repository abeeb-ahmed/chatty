import Conversation from "../../components/conversation/Conversation";
import Message from "../../components/message/Message";
import Topbar from "../../components/topbar/Topbar";
import "./messenger.scss";

const Messenger = () => {
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="messenger_container">
          <div className="messenger_left">
            <input type="text" placeholder="Search for friends" />
            <Conversation />
          </div>
          <div className="messenger_middle">
            <div className="messenger_middleText">
              <Message />
              <Message own />
              <Message />
              <Message own />
            </div>

            <div className="messenger_middleInput">
              <textarea placeholder="Enter message" />
              <div>
                <button className="btn">Submit</button>
              </div>
            </div>
          </div>
          <div className="messenger_right">right</div>
        </div>
      </div>
    </>
  );
};

export default Messenger;
