import { useEffect, useState } from "react";
import moment from "moment";
import axios from "axios";

import avatar from "../../assets/images/avatar.png";
import "./message.scss";

const Message = ({ own, message }) => {
  const [sender, setSender] = useState(null);

  const senderId = message.senderId;
  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users?userId=${senderId}`
        );
        setSender(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [senderId]);

  return (
    <div className={`message ${own === true && "own"}`}>
      <div className="message_top">
        <img
          src={sender?.profilePicture ? sender.profilePicture : avatar}
          alt=""
        />
        <p>{message.text}</p>
      </div>
      <div className="message_bottom">
        <span>{moment(message.createdAt).fromNow()}</span>
      </div>
    </div>
  );
};

export default Message;
