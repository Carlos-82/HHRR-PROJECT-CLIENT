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
        this.setState({ user });
      })
      .catch(() => {
        this.setState({ error: "Sorry but we can't acces to the Porfile" }); //setetas el mensaje de error
      });
  }

  render() {
    const { user } = this.state; //aqui leo lo de la linea 21
    console.log(user);
    return (
      <div>
        <div className="card">
          <div className="card-header">
            <h2>{`${user.firstName} ${user.lastName}`}</h2>
          </div>
          <div className="list-group list-group-flush">
            <p className="list-group-item">DNI: {user.DNI}</p>
            <p className="list-group-item">NAF: {user.NAF}</p>
            <p className="list-group-item">Nationality: {user.nationality}</p>
            <p className="list-group-item">Genre: {user.genre}</p>
            <p className="list-group-item">Address: {user.Address}</p>
            <p className="list-group-item">Postal Code: {user.postalCode}</p>
            <p className="list-group-item">Country: {user.country}</p>
            <p className="list-group-item">Birth Date: {user.birthDate}</p>

            <p className="list-group-item">Email: {user.email}</p>
          </div>
          <div className="buttoncontainer buttoncompany">
            <Link to={`/user/${user._id}/editprofile`}>
              <button className="buttonedit btn btn-lg">Edit Profile</button>
            </Link>
            <Link to={`/user`}>
              <button className=" buttonprofile btn btn-lg">Back</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default withAuth(UserProfile);
