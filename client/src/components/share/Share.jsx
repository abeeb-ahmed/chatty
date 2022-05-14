import { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import PhotoLibraryIcon from "@mui/icons-material/PhotoLibrary";
import LabelIcon from "@mui/icons-material/Label";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import CancelIcon from "@mui/icons-material/Cancel";

import "./share.scss";
import avatar from "../../assets/images/avatar.png";
import { storage } from "../../firebase";

const Share = () => {
  const user = useSelector((state) => state.auth.user);
  const userId = user._id;
  const desc = useRef();
  const [file, setFile] = useState(null);
  const [imgurl, setImgurl] = useState("");
  const [perc, setPerc] = useState(null);

  // Store images to Firebase Storage
  useEffect(() => {
    const handleUpload = () => {
      const name = new Date().getTime() + file.name;
      const storageRef = ref(storage, name);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          setPerc(progress);
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // Handle unsuccessful uploads
          alert("Post was not sent. Try again");
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            setImgurl(downloadURL);
            console.log(downloadURL);
          });
        }
      );
    };
    if (file) {
      handleUpload();
    }
  }, [file]);

  // Handle post submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (desc.current.value === "" && file === null) {
      return;
    } else {
      // Send post request to server
      const sendPost = async (userId, desc, img) => {
        try {
          await axios.post("http://localhost:5000/api/posts", {
            userId: userId,
            desc: desc,
            img: img,
          });
          window.location.reload();
        } catch (error) {
          console.log(error);
          alert("Post failed to send");
        }
      };
      sendPost(userId, desc.current.value, imgurl);
    }
  };
  console.log(file);

  // Remove image upload
  const removeFile = () => {
    setFile(null);
  };

  return (
    <form className="share" onSubmit={handleSubmit}>
      <div className="share_top">
        <img src={user?.profilePicture ? user.profilePicture : avatar} alt="" />
        <input placeholder="What is on your mind?" type="text" ref={desc} />
      </div>
      <hr />
      <div className="share_bottom">
        <div className="share_bottomIcons">
          <label className="share_bottomIcon" htmlFor="file">
            <PhotoLibraryIcon style={{ color: "red" }} />
            <p>Photo or Video</p>
            <input
              style={{ display: "none" }}
              type="file"
              id="file"
              accept=".png, .jpg, .jpeg"
              onChange={(e) => setFile(e.target.files[0])}
            ></input>
          </label>
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
          <button type="submit" disabled={perc !== null && perc < 100}>
            Share
          </button>
        </div>
      </div>
      {file && (
        <div className="fileimage_container">
          <img src={file ? URL.createObjectURL(file) : ""} alt="" />
          <div onClick={removeFile}>
            <CancelIcon className="fileimage_icon" />
          </div>
        </div>
      )}
    </form>
  );
};

export default Share;
