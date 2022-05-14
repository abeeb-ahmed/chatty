import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import Post from "../post/Post";
import Share from "../share/Share";
import "./feed.scss";

const Feed = () => {
  const { user } = useSelector((state) => state.auth);
  const [posts, setPosts] = useState([]);
  const userId = user._id;

  useEffect(() => {
    // Get timeline from database and sort
    const getTimeline = async (userId) => {
      const res = await axios.get(
        `http://localhost:5000/api/posts/timeline/${userId}`
      );

      setPosts(
        res.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      );
    };
    getTimeline(userId);
  }, [userId]);

  return (
    <div className="feed">
      <Share />
      {posts.map((post) => {
        return <Post key={post._id} post={post} />;
      })}
    </div>
  );
};

export default Feed;
