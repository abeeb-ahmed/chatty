import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

import Leftbar from "../../components/leftbar/Leftbar";
import Rightbar from "../../components/rightbar/Rightbar";
import Feed from "../../components/feed/Feed";
import Topbar from "../../components/topbar/Topbar";
import "./profile.scss";
import avatar from "../../assets/images/avatar.png";
import coverImg from "../../assets/images/cover.png";

const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username;
  useEffect(() => {
    const fetchUser = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/users?username=${username}`
      );
      setUser(res.data);
    };
    fetchUser();
  }, [username]);

  return (
    <>
      <Topbar />
      <div className="profile">
        <Leftbar />
        <div className="profile_right">
          <div className="profile_rightTop">
            <div className="profile_coverImage">
              <img
                src={user?.coverPicture ? user.coverPicture : coverImg}
                alt=""
              />
            </div>
            <div className="profile_image">
              <img
                src={user?.profilePicture ? user.profilePicture : avatar}
                alt=""
              />
            </div>
            <div className="profile_desc">
              <h4 className="profile_title">{user?.username}</h4>
              <p className="profile_subTitle">{user?.desc}</p>
            </div>
          </div>
          <div className="profile_rightBottom">
            <Rightbar profile={user} />
            <Feed username={username} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
