import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import employeeService from "../lib/employeeService";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.userId;
    employeeService
      .employeeProfile(id)
      .then((user) => {
        console.log(user);
        this.setState({ user });
      })
      .catch(() => {
        this.setState({ error: "Sorry but we can't acces to the Company" }); //setetas el mensaje de error
      });
  }

  render() {
    const employee = this.state.employee; //aqui leo lo de la linea 21
    return (
      <div>
        <h2>
          {employee.firstName} {employee.lastName}
        </h2>
        <p>DNI: {employee.DNI}</p>
        <p>NAF: {employee.NAF}</p>
        <p>Nationality: {employee.nationality}</p>
        <p>Genre: {employee.genre}</p>
        <p>Address: {employee.Address}</p>
        <p>Postal Code: {employee.postalCode}</p>
        <p>Country: {employee.country}</p>
        <p>Birth Date: {employee.birthDate}</p>
        <p>Is Admin? {employee.admin ? "Yes" : "No"}</p>
        <p>Email: {employee.email}</p>

        <Link to={`/user/${employee._id}/editProfile`}>
          <button>Edit Profile</button>
        </Link>
        <Link to={`/user`}>
          <button>Back</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(UserProfile);
