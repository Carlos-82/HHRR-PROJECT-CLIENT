import React, { Component } from "react";

import { withAuth } from "../lib/AuthProvider";
import employeeService from "../lib/employeeService";

class UserEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.history);
    //como puedo traer los datos del usuario
    const id = this.props.match.params.userId;
    employeeService.employeeProfile(id).then((user) => {
      console.log(user);
      this.setState(user);
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const {
      firstName,
      lastName,
      DNI,
      NAF,
      nationality,
      genre,
      adress,
      postalCode,
      country,
      birthDate,
      admin,
    } = this.state;
    console.log("buenas", this.state);
    const id = this.props.match.params.userId;
    employeeService
      .employeeEdit(id, {
        firstName,
        lastName,
        DNI,
        NAF,
        nationality,
        genre,
        adress,
        postalCode,
        country,
        birthDate,
        admin,
      })
      .then((user) => {
        console.log("buenas2", user);
        this.props.history.push(`/employee/${id}`);
      })
      .catch(() => {
        this.setState({ error: "Los datos introducidos son incorrectos" }); //setetas el mensaje de error
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    console.log(this.state);
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
    } = this.state;

    return (
      <div className="container">
        <section className="section">
          <div className="page-body">
            <h3 className="Edit">Edit Employee</h3>
            <form onSubmit={this.handleFormSubmit}>
              <div className="field">
                <label className="label">First Name:</label>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  value={firstName || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Last Name:</label>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  value={lastName || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">DNI:</label>
                <input
                  className="input"
                  type="text"
                  name="DNI"
                  value={DNI || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">NAF:</label>
                <input
                  className="input"
                  type="number"
                  name="NAF"
                  value={NAF || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Nationality:</label>
                <input
                  className="input"
                  type="text"
                  name="nationality"
                  value={nationality || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Genre</label>
                <div className="select">
                  <select
                    name="genre"
                    value={genre}
                    onChange={this.handleChange}
                  >
                    <option value="Fisica">Male</option>
                    <option value="Juridica">Female</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="label">Address:</label>
                <input
                  className="input"
                  type="text"
                  name="address"
                  value={address || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Postal Code:</label>
                <input
                  className="input"
                  type="number"
                  name="postalCode"
                  value={postalCode || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Country</label>
                <input
                  className="input"
                  type="text"
                  name="country"
                  value={country || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Birth Date:</label>
                <input
                  className="input"
                  type="date"
                  name="birthDate"
                  value={birthDate || ""}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">App Admin:</label>
                <input
                  className="input"
                  type="checkbox"
                  name="admin"
                  value={admin}
                  onChange={this.handleChange}
                />
              </div>

              <div className="buttonDiv">
                <p>{this.state.error}</p> {/* muestras el mensaje de error  */}
                <button
                  type="submit"
                  disabled={
                    !!this.state.error
                    /* se desabilita el button cuando hay un error */
                  }
                  className="button"
                >
                  Submit Edit
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withAuth(UserEdit);
