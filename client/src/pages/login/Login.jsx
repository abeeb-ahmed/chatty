import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import "./login.scss";
import logo from "../../assets/images/logo-blue.png";
import { login } from "../../redux/apiCalls";

const Login = () => {
  const history = useHistory();
  const email = useRef();
  const password = useRef();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      email: email.current.value,
      password: password.current.value,
    };
    login(user, dispatch, history);
  };

  return (
    <div className="login">
      <div className="login_container">
        <div className="login_left">
          <div className="login_leftImg">
            <img src={logo} alt="" />
          </div>
        </div>
        <div className="login_right">
          <div className="login_rightContainer">
            <form onSubmit={handleSubmit} className="login_form">
              <input placeholder="Email" type="email" required ref={email} />
              <input
                placeholder="Password"
                type="password"
                required
                ref={password}
              />
              <button type="submit">Login</button>
            </form>
            <div className="login_bottom">
              <p>Forgot Password?</p>
              <button>
                <Link to="/register">Create a New Account</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
