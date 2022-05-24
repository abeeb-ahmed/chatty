import axios from "axios";
import { useEffect, useState } from "react";

import avatar from "../../assets/images/avatar.png";
import "./conversation.scss";

const Conversation = ({ currentUser, conversation }) => {
  const [user, setUser] = useState(null);
  const recieverId = conversation.members?.find((m) => m !== currentUser._id);

  useEffect(() => {
    const getUser = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/users?userId=${recieverId}`
        );
        setUser(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, [recieverId]);

  return (
    <div className="conversation">
      <img src={user?.profilePicture ? user.profilePicture : avatar} alt="" />
      <p>{user?.username}</p>
    </div>
  );
};

export default Conversation;
