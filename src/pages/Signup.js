import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Signup extends Component {
  state = { firstName: "", email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { firstName, email, password } = this.state;
    this.props.signup({ firstName, email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { firstName, email, password } = this.state;
    return (
      <div className="containerform">
        <h1>Sign Up</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Name:</label>
            <div className="col-sm-10">
              <input
                placeholder="Your First Name is required"
                className="form-control"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input
                placeholder="Email is required"
                className="form-control"
                type="email"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-10">
              <input
                placeholder="Password is required"
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />

          <input type="submit" value="Signup" className="btn btn-dark" />
        </form>

        <p>Already have account?</p>
        <Link to={"/login"}> Login</Link>
      </div>
    );
  }
}

export default withAuth(Signup);
