import React, { Component } from "react";
import adminEmployees from "../lib/adminEmployees";
import { withAuth } from "../lib/AuthProvider";

class CreateEmployee extends Component {
  state = {
    firstName: "",
    lastName: "",
    DNI: "",
    NAF: "",
    nationality: "",
    genre: "Male",
    address: "",
    postalCode: "",
    country: "",
    birthDate: "",
    admin: "false",
    email: "",
    password: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      DNI,
      NAF,
      nationality,
      genre,
      address,
      postalCode,
      country,
      birthDate,
      admin,
      email,
      password,
    } = this.state;

    const newEmployee = {
      firstName,
      lastName,
      DNI,
      NAF,
      nationality,
      genre,
      address,
      postalCode,
      country,
      birthDate,
      admin,
      email,
      password,
    };

    console.log("helooooo", newEmployee);
    adminEmployees
      .employeeCreate(newEmployee)
      .then((employee) => {
        console.log(employee);
        this.props.history.push("/admin");
      })
      .catch(() => {
        this.setState({
          error: "There was an error during the employee creation",
        }); //seteas el mensaje de error
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "firstName") {
      // resetea el estado del botton despues del error, volviendolo a habilitar cuando se modifica el registerName
      this.setState({ error: "" });
    }
    this.setState({ [name]: value });
  };

  render() {
    const {
      firstName,
      lastName,
      DNI,
      NAF,
      nationality,
      genre,
      address,
      postalCode,
      country,
      birthDate,
      admin,
      email,
      password,
    } = this.state;

    return (
      <div className="containerform">
        <h3 className="">Employee Form</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">FirsT Name:</label>
            <div className="col-sm-10">
              <input
                placeholder="First Name"
                className="form-control"
                type="text"
                name="firstName"
                value={firstName}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Last Name:</label>
            <div className="col-sm-10">
              <input
                placeholder="Last Name"
                className="form-control"
                type="text"
                name="lastName"
                value={lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Email:</label>
            <div className="col-sm-10">
              <input
                placeholder="email"
                className="form-control"
                type="text"
                name="email"
                value={email}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Password:</label>
            <div className="col-sm-10">
              <input
                placeholder="Password"
                className="form-control"
                type="text"
                name="password"
                value={password}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Is Admin?</label>
            <div className="col-sm-10 divcheck">
              <input
                type="checkbox"
                name="admin"
                value={admin}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">DNI:</label>
            <div className="col-sm-10">
              <input
                placeholder="DNI"
                className="form-control"
                type="text"
                name="DNI"
                value={DNI}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">NAF:</label>
            <div className="col-sm-10">
              <input
                placeholder="NAF"
                className="form-control"
                type="text"
                name="NAF"
                value={NAF}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Nationality:</label>
            <div className="col-sm-10">
              <input
                placeholder="Nationality"
                className="form-control"
                type="text"
                name="nationality"
                value={nationality}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Genre</label>
            <div className="col-sm-10">
              <select
                className="form-control"
                name="genre"
                value={genre}
                onChange={this.handleChange}
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address:</label>
            <div className="col-sm-10">
              <input
                placeholder="Address"
                className="form-control"
                type="text"
                name="address"
                value={address}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Postal Code:</label>
            <div className="col-sm-10">
              <input
                placeholder="Postal Code"
                className="form-control"
                type="text"
                name="postalCode"
                value={postalCode}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Country:</label>
            <div className="col-sm-10">
              <input
                placeholder="Country"
                className="form-control"
                type="text"
                name="country"
                value={country}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Birth Date:</label>
            <div className="col-sm-10">
              <input
                placeholder="Birth Date"
                className="form-control"
                type="date"
                name="birthDate"
                value={birthDate}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="buttonDiv">
            <p>{this.state.error}</p> {/* muestras el mensaje de error  */}
            <button
              type="submit"
              disabled={
                !!this.state.error
                /* se desabilita el button cuando hay un error */
              }
              className="btn buttonprofile"
            >
              Submit Employee
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(CreateEmployee);
