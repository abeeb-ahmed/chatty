import { Link } from "react-router-dom";

import "./register.scss";
import logo from "../../assets/images/logo-blue.png";

const Register = () => {
  return (
    <div className="login">
      <div className="login_container">
        <div className="login_left">
          <div className="login_leftImg">
            <img src={logo} alt="" />
          </div>
          <p>Stay connected to your friends and the world on Chatty</p>
        </div>
        <div className="login_right">
          <div className="login_rightContainer">
            <form action="" className="login_form">
              <input placeholder="Username" type="text" />
              <input placeholder="Email" type="text" />
              <input placeholder="Password" type="text" />
              <input placeholder="Password Again" type="text" />
              <button>Sign Up</button>
            </form>
            <div className="login_bottom">
              <button>
                <Link to="/login">Log Into Account</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
