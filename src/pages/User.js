import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

import employeeService from "../lib/employeeService";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    };
  }

  componentDidMount() {
    const { _id } = this.props.user;
    employeeService
      .employeeContract(_id)
      .then((user) => {
        this.setState({ user });
      })
      .catch(() => {
        this.setState({ error: "Sorry but we can't acces to the Contracts" }); //setetas el mensaje de error
      });
  }
  render() {
    const { user } = this.state;
    console.log(user);
    return (
      <div>
        {this.state.user && (
          <div className="card">
            <div className="card-header">
              <h2>{this.state.user.firstName}</h2>
            </div>
            <div className="list-group list-group-flush">
              <p className="list-group-item">Start Date: {user.startDate}</p>
              <p className="list-group-item">End Date: {user.endDate}</p>
              <p className="list-group-item">
                Contract Type: {user.contractType}
              </p>
              <p className="list-group-item">
                Contract Code: {user.contractCode}
              </p>
              <p className="list-group-item">WorK per Day: {user.worDay}</p>
              <p className="list-group-item">WorK Hours: {user.workHours}</p>
              <p className="list-group-item">Category: {user.category}</p>
              <p className="list-group-item">Job Role: {user.jobRole}</p>
              <p className="list-group-item">Salay: {user.salary}</p>
              <p className="list-group-item">Bonus: {user.bonus}</p>
              <p className="list-group-item">
                Education Level: {user.educationLevel}
              </p>
              <p className="list-group-item">
                Vacation Days: {user.vacationDays}
              </p>
              <p className="list-group-item">
                Aditional Clauses: {user.aditionalClauses}
              </p>
            </div>
            <div className="buttoncontainer buttoncompany">
              <Link to={`/user/${user.user}`}>
                <button className="buttonprofile btn btn-lg ">
                  View Profile
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(User);
