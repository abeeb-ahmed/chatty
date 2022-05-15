import { useHistory } from "react-router-dom";

import "./followings.scss";

const Followings = ({ followingName, followingImg }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/profile/" + followingName);
  };
  return (
    <div className="following" onClick={handleClick}>
      <img src={followingImg} alt="" />
      <p>{followingName}</p>
    </div>
  );
};

export default Followings;
