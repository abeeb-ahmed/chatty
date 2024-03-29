import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

import "./rightbar.scss";
import boxIcon from "../../assets/images/gift-box.png";
import Online from "../online/Online";
import Followings from "../followings/Followings";
import avatar from "../../assets/images/avatar.png";
import { useParams } from "react-router-dom";
import { followUser, unfollowUser } from "../../redux/AuthSlice";

const Rightbar = ({ profile, home }) => {
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const [friends, setFriends] = useState([]);

  const { username } = useParams();
  const userId = user?._id;
  const [isFollowing, setIsFollowing] = useState(
    user.followings?.includes(profile?._id)
  );

  useEffect(() => {
    const getFriends = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/users/friends/${userId}`
      );
      setFriends(res.data);
    };
    getFriends();
  }, [userId]);

  const handleClick = async () => {
    try {
      if (isFollowing) {
        await axios.put(
          `http://localhost:5000/api/users/${profile._id}/unfollow`,
          {
            userId: userId,
          }
        );
        dispatch(unfollowUser(profile._id));
      } else {
        await axios.put(
          `http://localhost:5000/api/users/${profile._id}/follow`,
          {
            userId: userId,
          }
        );
        dispatch(followUser(profile._id));
      }
      setIsFollowing(!isFollowing);
    } catch (error) {
      console.log(error);
    }
  };

  const HomeRightbar = () => {
    return (
      <>
        <div className="rightbar_top">
          <img src={boxIcon} alt="logo" />
          <span>
            <b>Abeeb Ahmed</b> and <b>3 other friends</b> have a birthday today
          </span>
        </div>
        <div className="rightbar_middle">
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <div className="rightbar_bottom">
          <h4 className="rightbar_bottomTitle">Online Friends</h4>
          <Online username="Abeeb Ahmed" />
          <Online username="Abeeb Ahmed" />
          <Online username="Abeeb Ahmed" />
        </div>
      </>
    );
  };

  const ProfileRightbar = () => {
    return (
      <>
        {username !== user.username && (
          <button className="follow_button" onClick={handleClick}>
            {isFollowing ? "Unfollow" : "Follow"}
            {isFollowing ? <RemoveIcon /> : <AddIcon />}
          </button>
        )}
        <h4 className="rightbar_bottomTitle">Profile Information</h4>
        <div className="profile_rightbarInfos">
          <div className="profile_rightbarInfo">
            <span className="profile_rightbarKey">City: </span>
            <span className="profile_rightbarValue">{user.city}</span>
          </div>
          <div className="profile_rightbarInfo">
            <span className="profile_rightbarKey">From: </span>
            <span className="profile_rightbarValue">{user.city}</span>
          </div>
          <div className="profile_rightbarInfo">
            <span className="profile_rightbarKey">Relationship: </span>
            <span className="profile_rightbarValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                : "-"}
            </span>
          </div>
        </div>
        <h4 className="rightbar_bottomTitle">Friends</h4>
        <div className="profile_rightbarFollowings">
          {friends.map((friend, index) => {
            return (
              <Followings
                key={index}
                followingName={friend.username}
                followingImg={
                  friend?.profilePicture ? friend.profilePicture : avatar
                }
              />
            );
          })}
        </div>
      </>
    );
  };

  return (
    <div className={`rightbar ${home ? "rightbar_mobile" : ""}`}>
      <div className="rightbar_wrapper">
        {profile ? <ProfileRightbar /> : <HomeRightbar />}
      </div>
    </div>
  );
};

export default Rightbar;
