import { useEffect, useState } from "react";
import axios from "axios";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import moment from "moment";
import { useSelector } from "react-redux";

import "./post.scss";
import likeLogo from "../../assets/images/like.png";
import avatar from "../../assets/images/avatar.png";
import heartLogo from "../../assets/images/heart.png";

const Post = ({ post }) => {
  const currentUser = useSelector((state) => state.auth.user);
  const [liked, setLiked] = useState(post.likes.length);
  const [isLiked, setIsLiked] = useState(false);
  const [postUser, setPostUser] = useState();

  useEffect(() => {
    setIsLiked(post?.likes.includes(currentUser?._id));
  }, [currentUser._id, post.likes]);

  const handleLike = async () => {
    try {
      await axios.put(`http://localhost:5000/api/posts/${post._id}/like`);
    } catch (error) {}
    if (isLiked) {
      setLiked(liked - 1);
    } else {
      setLiked(liked + 1);
    }
    setIsLiked(!isLiked);
  };
  const userId = post?.userId;

  useEffect(() => {
    const getUserInfo = async (userId) => {
      const user = await axios.get(
        `http://localhost:5000/api/users?userId=${userId}`
      );
      setPostUser(user?.data);
    };
    getUserInfo(userId);
  }, [userId]);

  return (
    <div className="post">
      <div className="post_top">
        <div className="post_topLeft">
          <img
            src={postUser?.profilePicture ? postUser.profilePicture : avatar}
            alt=""
          />
          <p>{postUser?.username}</p>
          <span>{moment(post?.createdAt).fromNow()}</span>
        </div>
        <div className="post_topRight">
          <MoreVertIcon className="vert_icon" />
        </div>
      </div>
      <div className="post_middle">
        <p>{post?.desc}</p>
        {post?.img && <img src={post.img} alt="" />}
      </div>
      <div className="post_bottom">
        <div className="post_bottomLeft">
          <div className="post_bottomLeft_logos">
            <img src={likeLogo} alt="" />
            <div onClick={handleLike}>
              <img src={heartLogo} alt="" />
            </div>
          </div>
          <span>{liked} people like it</span>
        </div>
        <div className="post_bottomRight">
          <span>5 comments</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
