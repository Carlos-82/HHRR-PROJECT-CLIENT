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
      <div className="container">
        <section className="section">
          <div className="page-body">
            <h3 className="">Employee Form</h3>
            <form onSubmit={this.handleFormSubmit}>
              <div className="field">
                <label className="label">First Name:</label>
                <input
                  className="input"
                  type="text"
                  name="firstName"
                  value={firstName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Last Name:</label>
                <input
                  className="input"
                  type="text"
                  name="lastName"
                  value={lastName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">DNI:</label>
                <input
                  className="input"
                  type="text"
                  name="DNI"
                  value={DNI}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">NAF:</label>
                <input
                  className="input"
                  type="number"
                  name="NAF"
                  value={NAF}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Nationality:</label>
                <input
                  className="input"
                  type="text"
                  name="nationality"
                  value={nationality}
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
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="label">Address:</label>
                <input
                  className="input"
                  type="text"
                  name="address"
                  value={address}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Postal Code:</label>
                <input
                  className="input"
                  type="number"
                  name="postalCode"
                  value={postalCode}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Country</label>
                <input
                  className="input"
                  type="text"
                  name="country"
                  value={country}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Birth Date:</label>
                <input
                  className="input"
                  type="date"
                  name="birthDate"
                  value={birthDate}
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

              <div className="field">
                <label className="label">Email:</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  value={email}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Password:</label>
                <input
                  className="input"
                  type="password"
                  name="password"
                  value={password}
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
                  Submit Employee
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withAuth(CreateEmployee);
