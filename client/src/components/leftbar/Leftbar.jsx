import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";

import "./leftbar.scss";
import CloseFriend from "../closeFriend/CloseFriend";
import { signOut } from "../../redux/AuthSlice";

const Leftbar = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(signOut());
    history.push("/login");
  };
  return (
    <div className="leftbar">
      <div className="leftbar_wrapper">
        <div className="leftbar_items">
          <Link to="/">
            <div className="leftbar_item">
              <RssFeedIcon className="leftbar_icon" />
              <p>Feeds</p>
            </div>
          </Link>
          <Link to="/">
            <div className="leftbar_item">
              <ChatIcon className="leftbar_icon" />
              <p>Chats</p>
            </div>
          </Link>
          <Link to="/">
            <div className="leftbar_item">
              <PlayCircleIcon className="leftbar_icon" />
              <p>Videos</p>
            </div>
          </Link>
          <Link to="/">
            <div className="leftbar_item">
              <GroupIcon className="leftbar_icon" />
              <p>Groups</p>
            </div>
          </Link>
          <Link to="/">
            <div className="leftbar_item">
              <BookmarkIcon className="leftbar_icon" />
              <p>Bookmarks</p>
            </div>
          </Link>
          <Link to="/">
            <div className="leftbar_item">
              <HelpOutlineIcon className="leftbar_icon" />
              <p>Questions</p>
            </div>
          </Link>
          <Link to="/">
            <div className="leftbar_item">
              <WorkOutlineIcon className="leftbar_icon" />
              <p>Jobs</p>
            </div>
          </Link>
          <Link to="/">
            <div className="leftbar_item">
              <EventIcon className="leftbar_icon" />
              <p>Events</p>
            </div>
          </Link>
          <Link to="/">
            <div className="leftbar_item">
              <SchoolIcon className="leftbar_icon" />
              <p>Courses</p>
            </div>
          </Link>
          <button onClick={handleSignout}>Log Out</button>
        </div>
        <hr />
        <CloseFriend friendName="Abeeb Ahmed" />
        <CloseFriend friendName="Abeeb Ahmed" />
        <CloseFriend friendName="Abeeb Ahmed" />
      </div>
    </div>
  );
};

export default Leftbar;
