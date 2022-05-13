import { useRef } from "react";
import { Link, useHistory } from "react-router-dom";

import "./register.scss";
import logo from "../../assets/images/logo-blue.png";
import { register } from "../../redux/apiCalls";

const Register = () => {
  const history = useHistory();
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.current.value !== passwordAgain.current.value) {
      passwordAgain.current.setCustomValidity("Passwords do not match");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      register(user, history);
    }
  };

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
            <form onSubmit={handleSubmit} className="login_form">
              <input
                required
                placeholder="Username"
                type="text"
                ref={username}
              />
              <input required placeholder="Email" type="email" ref={email} />
              <input
                required
                placeholder="Password"
                type="password"
                minLength={6}
                ref={password}
              />
              <input
                required
                placeholder="Password Again"
                type="password"
                minLength={6}
                ref={passwordAgain}
              />
              <button type="submit">Sign Up</button>
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
