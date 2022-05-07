import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";

import "./share.scss";

const Share = () => {
  return (
    <div className="share">
      <div className="share_top">
        <img
          src="data:image/jpeg;base64,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"
          alt="img"
        />
        <input placeholder="What is on your mind Ahmed?" type="text" />
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
