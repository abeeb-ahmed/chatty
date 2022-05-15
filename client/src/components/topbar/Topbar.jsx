import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatIcon from "@mui/icons-material/Chat";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import NotificationsIcon from "@mui/icons-material/Notifications";

import "./topbar.scss";
import logo from "../../assets/images/logo-transparent.png";
import avatar from "../../assets/images/avatar.png";
import logoMobile from "../../assets/images/logo.png";
import Online from "../online/Online";
import { signOut } from "../../redux/AuthSlice";

const Topbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  const history = useHistory();
  const dispatch = useDispatch();
  const handleSignout = () => {
    dispatch(signOut());
    history.pushState("/login");
  };

  return (
    <div className="topbar">
      <div className="topbar_left">
        <Link to="/">
          <img className="laptop" src={logo} alt="" />
          <img className="mobile" src={logoMobile} alt="" />
        </Link>
      </div>
      <div className="topbar_middle">
        <div className="topbar_search">
          <SearchIcon className="topbar_searchIcon" />
          <input placeholder="Search..." type="text" />
        </div>
      </div>
      <div className="topbar_right">
        <div className="topbar_rightLinks">
          <Link to="/">Homepage</Link>
          <Link to="/timeline">Timeline</Link>
        </div>
        <div className="topbar_rightNotification">
          <div className="topbar_righticon">
            <PersonIcon className="topbar_icon" />
            <div className="topbar_notif">1</div>
          </div>
          <div className="topbar_righticon">
            <ChatIcon className="topbar_icon" />
            <div className="topbar_notif">1</div>
          </div>
          <div className="topbar_righticon">
            <NotificationsIcon className="topbar_icon" />
            <div className="topbar_notif">1</div>
          </div>
        </div>
        <div className="topbar__rightAvatar">
          <Link to={`/profile/${user.username}`}>
            <img
              src={user?.profilePicture ? user.profilePicture : avatar}
              alt="avatar"
            />
          </Link>
        </div>
      </div>
      <div className="topbar_toggler">
        <div className="toggler_container" onClick={handleToggle}>
          {toggled ? (
            <CloseIcon className="closeIcon" />
          ) : (
            <MenuIcon className="openIcon" />
          )}
        </div>
      </div>
      <div
        onClick={handleToggle}
        className={`mobile_menuContainer ${toggled ? "open" : ""} `}
      >
        <ul className={`mobile_menu ${toggled ? "open" : ""} `}>
          <div className="mobile_menuTop">
            <div className="mobile_menuTopContainer">
              <div className="mobile_menuAvatar">
                <Link to={`/profile/${user.username}`}>
                  <img
                    src={user?.profilePicture ? user.profilePicture : avatar}
                    alt="avatar"
                  />
                </Link>
                <div className="mobile_menuTopContent">
                  <h4>{user?.username}</h4>
                  <div className="topbar_rightNotification">
                    <div className="topbar_righticon">
                      <PersonIcon className="topbar_icon" />
                      <div className="topbar_notif">1</div>
                    </div>
                    <div className="topbar_righticon">
                      <ChatIcon className="topbar_icon" />
                      <div className="topbar_notif">1</div>
                    </div>
                    <div className="topbar_righticon">
                      <NotificationsIcon className="topbar_icon" />
                      <div className="topbar_notif">1</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="mobile_menuBottom">
            <div className="mobile_menuLinks">
              <h4>Navigation</h4>
              <div className="topbar_rightLinks">
                <Link to="/">Homepage</Link>
                <Link to="/timeline">Timeline</Link>
              </div>
            </div>

            <div className="leftbar_items">
              <h4>More Links</h4>
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
              <button
                style={{
                  border: "none",
                  padding: "7px 15px",
                  borderRadius: "5px",
                }}
                onClick={handleSignout}
              >
                Sign Out
              </button>
            </div>

            <div className="rightbar_friendsList">
              <h4>Online Friends</h4>
              <Online username="Abeeb Ahmed" />
              <Online username="Abeeb Ahmed" />
              <Online username="Abeeb Ahmed" />
              <Online username="Abeeb Ahmed" />
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
