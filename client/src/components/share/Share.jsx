import { useSelector } from "react-redux";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import "./share.scss";
import avatar from "../../assets/images/avatar.png";

const Share = () => {
  const user = useSelector((state) => state.auth.user);
  return (
    <div className="share">
      <div className="share_top">
        <img src={user?.profilePicture ? user.profilePicture : avatar} alt="" />
        <input placeholder="What is on your mind?" type="text" />
      </div>
      <hr />
      <div className="share_bottom">
        <div className="share_bottomIcons">
          <div className="share_bottomIcon">
            <PhotoLibraryIcon style={{ color: "red" }} />
            <p>Photo or Video</p>
          </div>
          <div className="share_bottomIcon">
            <LabelIcon style={{ color: "blue" }} />
            <p>Tag</p>
          </div>
          <div className="share_bottomIcon">
            <LocationOnIcon style={{ color: "green" }} />
            <p>Location</p>
          </div>
          <div className="share_bottomIcon">
            <EmojiEmotionsIcon style={{ color: "orange" }} />
            <p>Feelings</p>
          </div>
        </div>
        <div className="share_button">
          <button>Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
