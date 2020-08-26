import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import adminContracts from "../lib/adminContracts";
import adminEmployees from "../lib/adminEmployees";

class AllContracts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employee: {},
    };
  }

  componentDidMount() {
    const { employeeId } = this.props.match.params;
    adminEmployees.allContracts(employeeId).then((employee) => {
      this.setState({ employee });
    });
  }

  delete = (employeeId, contractId) => {
    adminContracts
      .deleteContract(employeeId, contractId)
      .then(() =>
        this.props.history.push(
          `/admin/employee/${employeeId}/contract/${contractId}`
        )
      )
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const { employee } = this.state;
    return (
      <div>
        {employee &&
          employee.contract &&
          employee.contract.map((contract) => (
            <div key={contract._id}>
              <Link
                to={`/admin/employee/${employee._id}/contract/${contract._id}`}
              >
                <p>{`${contract.contractType} ${contract.startDate || ""}`}</p>
                <p>{contract.endDate}</p>
              </Link>
              <Link to={`/admin/employee/${employee._id}`}>
                <button>Profile</button>
              </Link>
              {this.props.user && employee._id !== this.props.user._id && (
                <button
                  className="button"
                  onClick={() => this.delete(employee._id)}
                >
                  Delete
                </button>
              )}
            </div>
          ))}
        <Link to={`/admin/employee/${employee._id}/contract/create`}>
          <button>Create Contract</button>
        </Link>
      </div>
    );
  }
}

export default withAuth(AllContracts);
