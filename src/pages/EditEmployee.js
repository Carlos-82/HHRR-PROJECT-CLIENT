import React, { Component } from "react";
import adminEmployees from "../lib/adminEmployees";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

class EditEmployee extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //como puedo traer los datos del usuario
    const id = this.props.match.params.id;
    adminEmployees.employeeId(id).then((employee) => {
      this.setState(employee);
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
      address,
      postalCode,
      country,
      birthDate,
      admin,
    } = this.state;

    const id = this.props.match.params.id;
    adminEmployees
      .employeeEdit(id, {
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
      })
      .then((employee) => {
        this.props.history.push(`/admin/employee/${id}`);
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
        <h3 className="Edit">Edit Employee</h3>
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

          <div className="buttoncontainer">
            <div className="divbuttons">
              <p>{this.state.error}</p> {/* muestras el mensaje de error  */}
              <button
                type="submit"
                disabled={
                  !!this.state.error
                  /* se desabilita el button cuando hay un error */
                }
                className="btn buttonedit"
              >
                Submit Edit
              </button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(EditEmployee);
