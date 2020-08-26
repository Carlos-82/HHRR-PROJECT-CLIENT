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
        this.setState({ error: "Sorry but we can't acces to the Company" }); //setetas el mensaje de error
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
        <h2>
          {employee.firstName} {employee.lastName}
        </h2>
        <p>DNI: {employee.DNI}</p>
        <p>NAF: {employee.NAF}</p>
        <p>Nationality: {employee.nationality}</p>
        <p>Genre: {employee.genre}</p>
        <p>Address: {employee.address}</p>
        <p>Postal Code: {employee.postalCode}</p>
        <p>Country: {employee.country}</p>
        <p>Birth Date: {employee.birthDate}</p>
        <p>Is Admin? {employee.admin ? "Yes" : "No"}</p>
        <p>Email: {employee.email}</p>

        <Link to={`/admin/employee/${employee._id}/editemployee`}>
          <button>Edit Employee</button>
        </Link>
        <Link to={`/admin/employee/${employee._id}/contract`}>
          <button>Contracts</button>
        </Link>

        {this.props.user && employee.id !== this.props.user.id && (
          <button
            className="button"
            onClick={() => this.delete(employee._id)}
          ></button>
        )}
      </div>
    ) : (
      <div>
        <div>Loading</div>
      </div>
    );
  }
}

export default withAuth(EmployeeInformation);
