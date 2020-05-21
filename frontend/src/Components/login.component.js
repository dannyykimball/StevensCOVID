import React, { useState, useContext } from "react";
import axios from "axios";
import UserContext from '../userContext';

export default function Login(props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const userContext = useContext(UserContext)

  function onChangeEmail(e) {
    setEmail(e.target.value)
  }

  function onChangePassword(e) {
    setPassword(e.target.value)
  }

  function onSubmit(e) {
    e.preventDefault();
    var user = {
      email: email,
      password: password
    }
    console.log(user)
    console.log(userContext)
    axios
      .post("http://" + window.location.hostname + ":5000/User/Login", user)
      .then((res) => {
        console.log(res.data)


      }).catch((err) => { console.log(err) });
  }



  return (
    <div className="signupbox orange">
      <h3 className="kinder">Login</h3>
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
            className="form-control"
            value={password}
            onChange={onChangePassword}
          />
        </div>

        <div className="form-group">
          <input type="submit" value="Log In" className="btn" onClick={onSubmit} />
        </div>
      </form>
    </div>
  );

}
