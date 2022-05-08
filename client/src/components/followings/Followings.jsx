import "./followings.scss";

const Followings = ({ followingName, followingImg }) => {
  return (
    <div className="following">
      <img src={followingImg} alt="" />
      <p>{followingName}</p>
    </div>
  );
};

export default Followings;
