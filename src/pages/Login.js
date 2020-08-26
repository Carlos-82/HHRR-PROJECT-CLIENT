import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Login extends Component {
  state = { email: "", password: "" };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    this.props.login({ email, password });
  };

  handleChange = (event) => {
    const { name, value } = event.target; //guardamos los valores que introducimos en el input en una constante
    this.setState({ [name]: value }); //actualiza el estado inicial de los valores
  };

  render() {
    const { email, password } = this.state;

    return (
      <div className="containerform">
        <h1>Login</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input
                placeholder="Your email is required"
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
                placeholder="Your password is required"
                className="form-control"
                type="password"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <br />
          <input
            type="submit"
            value="Login"
            className="btn btn-outline-primary"
          />
        </form>
      </div>
    );
  }
}

export default withAuth(Login);
