import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import adminContracts from "../lib/adminContracts";

class ContractInformation extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contract: {},
    };
  }

  componentDidMount = () => {
    const { employeeId, contractId } = this.props.match.params;

    this.getData(employeeId, contractId);
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.contract._id !== this.state.contract._id) {
      const { employeeId, contractId } = this.props.match.params;
      this.getData(employeeId, contractId);
    }
  }

  getData = (employeeId, contractId) =>
    adminContracts
      .oneContract({ employeeId, contractId })
      .then(({ contract }) => {
        this.setState({ contract }); // si se pusiera ({contract}) crearia una nueva llave, haciendo que fuera contract - contract y los componentes que forman el contract
      })
      .catch(() => {
        this.setState({ error: "Sorry but we can't acces to the Contract" }); //setetas el mensaje de error
      });

  delete = () => {
    const { employeeId, contractId } = this.props.match.params;
    adminContracts
      .deleteContract({ employeeId, contractId })
      .then(() => this.props.history.push("/admin"))
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    // const contract = this.state.contract;

    return (
      <div>
        {this.state.contract.user && (
          <div className="card">
            <div className="card-header">
              <h2>{this.state.contract.user.firstName}</h2>
              <h3>
                {this.state.contract.contractType}{" "}
                {this.state.contract.contractCode}
              </h3>
            </div>
            <div className="list-group list-group-flush">
              <p className="list-group-item">
                Start Date: {this.state.contract.startDate}
              </p>
              <p className="list-group-item">
                End Date: {this.state.contract.endDate}
              </p>
              <p className="list-group-item">
                WorK per Day: {this.state.contract.workDay}
              </p>
              <p className="list-group-item">
                WorK Hours: {this.state.contract.workHours}
              </p>
              <p className="list-group-item">
                Category: {this.state.contract.category}
              </p>
              <p className="list-group-item">
                Job Role: {this.state.contract.jobRole}
              </p>
              <p className="list-group-item">
                Salay: {this.state.contract.salary}
              </p>
              <p className="list-group-item">
                Salay: {this.state.contract.salary}
              </p>
              <p className="list-group-item">
                Salay: {this.state.contract.salary}
              </p>
              <p className="list-group-item">
                Salay: {this.state.contract.salary}
              </p>
              <p className="list-group-item">
                Bonus: {this.state.contract.bonus}
              </p>
              <p className="list-group-item">
                Education Level: {this.state.contract.educationLevel}
              </p>
              <p className="list-group-item">
                Vacation Days: {this.state.contract.vacationDays}
              </p>
              <p className="list-group-item">
                Aditional Clauses: {this.state.contract.aditionalClauses}
              </p>
            </div>
            <div className="buttoncontainer buttoncompany">
              <Link
                to={`/admin/employee/${this.state.contract.user._id}/contract/${this.state.contract._id}/editcontract`}
              >
                <button className="buttonedit btn btn-lg ">
                  Edit Contract
                </button>
              </Link>

              {this.props.user &&
                this.state.contract.user._id !== this.props.user._id && (
                  <button
                    className="buttonprofile btn btn-lg"
                    onClick={() => this.delete(this.state.contract._id)}
                  >
                    Delete Contract
                  </button>
                )}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(ContractInformation);
