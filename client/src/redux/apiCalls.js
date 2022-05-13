import axios from "axios";

import { start, success, failure } from "./AuthSlice";

export const login = async (user, dispatch, history) => {
  dispatch(start());
  try {
    const newUser = await axios.post("http://localhost:5000/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    console.log(newUser);
    // dispatch(success(newUser));
    history.push("/");
  } catch (error) {
    dispatch(failure(error));
    console.log(error);
    alert(error.message);
  }
};

export const register = async (user, history) => {
  try {
    await axios.post("http://localhost:5000/api/auth/register", {
      username: user.username,
      email: user.email,
      password: user.password,
    });
    alert("Registration successful");
    history.push("/login");
  } catch (error) {
    console.log(error);
    alert(error.message);
  }
};
