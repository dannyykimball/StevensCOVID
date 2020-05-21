import React, { Component } from "react";
import axios from "axios";

export default class Register extends Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangeFirstName = this.onChangeFirstName.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeSchool = this.onChangeSchool.bind(this);
    this.onChangeYear = this.onChangeYear.bind(this);
    this.onChangeIsTutor = this.onChangeIsTutor.bind(this);

    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      email: "",
      firstName: "",
      lastName: "",
      password: "",
      school: "",
      year: 0,
      isTutor: false,
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value,
    });
  }

  onChangeFirstName(e) {
    this.setState({
      firstName: e.target.value,
    });
  }

  onChangeLastName(e) {
    this.setState({
      lastName: e.target.value,
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value,
    });
  }

  onChangeSchool(e) {
    this.setState({
      school: e.target.value,
    });
  }

  onChangeYear(e) {
    this.setState({
      year: e.target.value,
    });
  }

  onChangeIsTutor(e) {
    this.setState({
      isTutor: e.target.value,
    });
  }

  onSubmit(e) {
    e.preventDefault();

    const user = {
      email: this.state.email,
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      password: this.state.password,
      school: this.state.school,
      year: parseInt(this.state.year),
      isTutor: this.state.isTutor,
    };

    console.log(user);

    axios
      .post("http://localhost:5000/User/Signup", user)
      .then((res) => console.log(res.data));

    //Where user is redirected after signup
    window.location = "/sessions";
  }

  render() {
    return (
      <div className="signupbox orange">
        <h3 className="kinder">Sign Up</h3>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label>Email: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.email}
              onChange={this.onChangeEmail}
            />
          </div>
          <div className="form-group">
            <label>First Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.firstName}
              onChange={this.onChangeFirstName}
            />
          </div>
          <div className="form-group">
            <label>Last Name: </label>
            <input
              type="text"
              required
              className="form-control"
              value={this.state.lastName}
              onChange={this.onChangeLastName}
            />
          </div>
          <div className="form-group">
            <label>Password: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.password}
              onChange={this.onChangePassword}
            />
          </div>
          <div className="form-group">
            <label>School: </label>
            <input
              type="text"
              className="form-control"
              value={this.state.school}
              onChange={this.onChangeSchool}
            />
          </div>
          <div className="form-group">
            <label>Year: </label>
            <input
              type="number"
              className="form-control"
              value={this.state.year}
              onChange={this.onChangeYear}
            />
          </div>
          <div className="form-group">
            <label>isTutor: </label>
            <input
              type="checkbox"
              className="form-control"
              value={this.state.isTutor}
              onChange={this.onChangeIsTutor}
            />
          </div>

          <div className="form-group">
            <input type="submit" value="Sign Up" className="btn" />
          </div>
        </form>
      </div>
    );
  }
}
