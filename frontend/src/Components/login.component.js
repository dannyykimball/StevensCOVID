import React, { useState, useContext } from "react";
import axios from "axios";
import { UserContext } from '../Store';

export default function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [user, setUser] = useContext(UserContext);

  function onChangeEmail(e) {
    setEmail(e.target.value);
  }

  function onChangePassword(e) {
    setPassword(e.target.value);
  }

  function onSubmit(e) {
    e.preventDefault();
    var userLoginRequest = {
      email: email,
      password: password
    }
    console.log("user context before:")
    console.log(user)
    axios
      .post("http://" + window.location.hostname + ":5000/User/Login", userLoginRequest)
      .then((res) => {
        console.log(res.data)
        if (res.data.isSuccess) {
          localStorage.setItem("user", JSON.stringify(res.data.data))
          setUser(res.data.data)
          //Where user is redirected after signup
          window.location = "/sessions";
        }

      }).catch((err) => { console.log(err) });
  }

  return (
    <div className="signupbox orange">
      <h3 className="learners center">Login</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            required
            className="form-control"
            value={email}
            onChange={onChangeEmail}
          />
        </div>

        <div className="form-group">
          <label>Password: </label>
          <input
            type="text"
            className="form-control password"
            value={password}
            onChange={onChangePassword}
          />
        </div>

        <div className="form-group">
          <input
            type="submit"
            value="Log In"
            className="btn"
            onClick={onSubmit}
          />
        </div>
      </form>
    </div>
  );
}
