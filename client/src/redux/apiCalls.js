import axios from "axios";

import { start, success, failure } from "./AuthSlice";

export const login = async (user, dispatch, history) => {
  dispatch(start());
  try {
    const { data } = await axios.post("http://localhost:5000/api/auth/login", {
      email: user.email,
      password: user.password,
    });
    dispatch(success(data));
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
