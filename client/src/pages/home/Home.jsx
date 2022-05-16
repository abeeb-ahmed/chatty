import Feed from "../../components/feed/Feed";
import Leftbar from "../../components/leftbar/Leftbar";
import Topbar from "../../components/topbar/Topbar";
import Rightbar from "../../components/rightbar/Rightbar";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Topbar />
      <div className="home">
        <Leftbar />
        <Feed />
        <Rightbar home />
      </div>
    </>
  );
};

export default Home;
