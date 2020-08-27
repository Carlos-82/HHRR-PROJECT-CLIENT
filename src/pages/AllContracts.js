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
    this.updateContractList();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.employee._id !== this.state.employee._id) {
      console.log(prevState);
      this.updateContractList();
    }
  }

  updateContractList() {
    const { employeeId } = this.props.match.params;
    adminEmployees.allContracts(employeeId).then((employee) => {
      this.setState({ employee });
    });
  }

  delete = (employeeId, contractId, index) => {
    const contracts = this.state.employee.contract;
    const contractToDelete = contracts[index];
    this.setState({ employee: contracts.splice(index, 1) });
    adminContracts.deleteContract({ employeeId, contractId });
    /* TAREA ver como hacer para agregarlo en la posición
    .catch(() => {
      console.log(
        "hola",
        contracts,
        contracts.splice(index, 0, contractToDelete),
        index,
        contractToDelete
      );
      this.setState({
        employee: contracts.splice(index, 0, contractToDelete),
      });
    });
    */
  };

  render() {
    const { employee } = this.state;
    return (
      <div>
        {employee &&
          employee.contract &&
          employee.contract.reverse().map((contract, index) => (
            <div key={contract._id} className="card">
              <Link
                to={`/admin/employee/${employee._id}/contract/${contract._id}`}
              >
                <h5 className="card-header">{`${contract.contractType}    ${
                  contract.jobRole || ""
                }`}</h5>
              </Link>
              <div className="buttoncontainer card-body">
                <p>Start Date: {contract.startDate}</p>
                <p>End Date: {contract.endDate}</p>
                <div className="divbuttons">
                  {this.props.user && employee._id !== this.props.user._id && (
                    <button
                      className="btn btn-danger button"
                      onClick={() =>
                        this.delete(employee._id, contract._id, index)
                      }
                    >
                      Delete
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        <div className="buttoncontainer buttoncompany">
          <Link to={`/admin/employee/${employee._id}`}>
            <button className="buttonprofile btn">Profile</button>
          </Link>
          <Link to={`/admin/employee/${employee._id}/contract/create`}>
            <button className="buttonedit btn btn-lg">Create Contract</button>
          </Link>
        </div>
      </div>
    );
  }
}

export default withAuth(AllContracts);
