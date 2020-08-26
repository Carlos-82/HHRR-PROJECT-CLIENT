import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

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
    return (
      <div>
        {this.state.user && (
          <div>
            <h2>{this.state.user.firstName}</h2>

            <p>Start Date: {user.startDate}</p>
            <p>End Date: {user.endDate}</p>
            <p>Contract Type: {user.contractType}</p>
            <p>Contract Code: {user.contractCode}</p>
            <p>WorK per Day: {user.worDay}</p>
            <p>WorK Hours: {user.workHours}</p>
            <p>Category: {user.category}</p>
            <p>Job Role: {user.jobRole}</p>
            <p>Salay: {user.salary}</p>
            <p>Bonus: {user.bonus}</p>
            <p>Education Level: {user.educationLevel}</p>
            <p>Vacation Days: {user.vacationDays}</p>
            <p>Aditional Clauses: {user.aditionalClauses}</p>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(User);
