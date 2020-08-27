import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import adminEmployees from "../lib/adminEmployees";

class EmployeeInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    adminEmployees
      .employeeId(id)
      .then((employee) => {
        console.log(employee);
        this.setState({ employee });
      })
      .catch(() => {
        this.setState({ error: "Sorry but we can't acces to the Employee" }); //setetas el mensaje de error
      });
  }

  delete = (id) => {
    adminEmployees
      .employeeDelete(id)
      .then(() => this.props.history.push("/admin"))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const employee = this.state.employee; //aqui leo lo de la linea 21
    return employee ? (
      <div>
        <div className="card">
          <div className="card-header">
            <h2>{`${employee.firstName} ${employee.lastName || ""}`}</h2>
          </div>
          <div className="list-group list-group-flush">
            <p className="list-group-item">DNI: {employee.DNI}</p>
            <p className="list-group-item">NAF: {employee.NAF}</p>
            <p className="list-group-item">
              Nationality: {employee.nationality}
            </p>
            <p className="list-group-item">Birth Date: {employee.birthDate}</p>
            <p className="list-group-item">Email: {employee.email}</p>
            <p className="list-group-item">Genre: {employee.genre}</p>
            <p className="list-group-item">Address: {employee.address}</p>
            <p className="list-group-item">
              Postal Code: {employee.postalCode}
            </p>
            <p className="list-group-item">Country: {employee.country}</p>
            <p className="list-group-item">
              Is Admin? {employee.admin ? "Yes" : "No"}
            </p>
          </div>
        </div>
        <div className="buttoncontainer buttoncompany">
          <Link to={`/admin/employee/${employee._id}/editemployee`}>
            <button className="buttonedit btn btn-lg ">Edit Employee</button>
          </Link>
          <Link to={`/admin/employee/${employee._id}/contract`}>
            <button className=" buttonprofile btn btn-lg">Contracts</button>
          </Link>
        </div>
      </div>
    ) : (
      <div>
        <div>Loading</div>
      </div>
    );
  }
}

export default withAuth(EmployeeInformation);
