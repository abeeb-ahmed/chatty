import "./login.scss";
import logo from "../../assets/images/logo-blue.png";

const Login = () => {
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
              <input placeholder="Email" type="text" />
              <input placeholder="Password" type="text" />
              <button>Login</button>
            </form>
            <div className="login_bottom">
              <p>Forgot Password?</p>
              <button>Create a New Account</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
