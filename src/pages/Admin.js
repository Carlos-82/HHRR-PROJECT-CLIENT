import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

import { Link } from "react-router-dom";
import adminEmployees from "../lib/adminEmployees";

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allEmployees: [],
    };
  }

  componentDidMount() {
    if (this.props.user && !this.props.user.admin) {
      this.props.history.push("/user");
    } else if (!this.props.user) {
      this.props.history.push("/");
    }

    adminEmployees.employeesAll().then((company) => {
      console.log("goodmorning", company);
      this.setState({ allEmployees: company.userIds });
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
    const { allEmployees } = this.state;
    return (
      <div>
        <>
          <h1>Welcome {this.props.user.firstName}</h1>
        </>
        <div>
          {allEmployees &&
            allEmployees.map((employee) => {
              return (
                <div key={employee._id}>
                  <p>{`${employee.firstName} ${employee.lastName || ""}`}</p>
                  <p>{employee.DNI}</p>
                  <Link to={`/admin/employee/${employee._id}`}>
                    <button>Profile</button>
                  </Link>
                  {employee._id !== this.props.user._id && (
                    <button
                      className="button"
                      onClick={() => this.delete(employee._id)}
                    >
                      Delete
                    </button>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withAuth(Admin);
