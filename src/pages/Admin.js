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

  delete = (id, index) => {
    adminEmployees
      .employeeDelete(id)
      .then(() => {
        const newView = [...this.state.allEmployees]; //copia del array
        newView.splice(index, 1);
        this.setState({ allEmployees: newView });
      })
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
            allEmployees.map((employee, index) => {
              return (
                <div key={employee._id} className="card">
                  <h5 className="card-header">{`${employee.firstName} ${
                    employee.lastName || ""
                  }`}</h5>
                  <div className=" buttoncontainer card-body">
                    <p>DNI: {employee.DNI}</p>
                    <div className="divbuttons">
                      <Link to={`/admin/employee/${employee._id}`}>
                        <button className="buttonprofile btn">Profile</button>
                      </Link>
                      {employee._id !== this.props.user._id && (
                        <button
                          className="btn btn-danger"
                          onClick={() => this.delete(employee._id, index)}
                        >
                          Delete
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

export default withAuth(Admin);
