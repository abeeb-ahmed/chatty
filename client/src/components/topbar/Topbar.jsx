import { useState } from "react";
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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import "./topbar.scss";
import logo from "../../assets/images/logo-transparent.png";
import avatar from "../../assets/images/avatar.png";
import logoMobile from "../../assets/images/logo.png";
import Online from "../online/Online";

const Topbar = () => {
  const user = useSelector((state) => state.auth.user);
  const [toggled, setToggled] = useState(false);

  const handleToggle = () => {
    setToggled(!toggled);
  };

  return (
    <div className="topbar">
      <div className="topbar_left">
        <img className="laptop" src={logo} alt="" />
        <img className="mobile" src={logoMobile} alt="" />
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
                <img
                  src="data:image/jpeg;base64,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"
                  alt="avatar"
                />
                <div className="mobile_menuTopContent">
                  <h4>Abeeb Ahmed</h4>
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
              <button>Show More</button>
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
