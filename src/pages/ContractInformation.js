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

  getData = (employeeId, contractId) =>
    adminContracts
      .oneContract({ employeeId, contractId })
      .then((contract) => {
        console.log("buuuuarns", contract);
        return this.setState(contract); // si se pusiera ({contract}) crearia una nueva llave, haciendo que fuera contract - contract y los componentes que forman el contract
      })
      .catch(() => {
        this.setState({ error: "Sorry but we can't acces to the Contract" }); //setetas el mensaje de error
      });

  componentDidMount = () => {
    const { employeeId, contractId } = this.props.match.params;
    console.log("1", this.props.match.params);
    console.log("boooo", employeeId);
    this.getData(employeeId, contractId);
  };

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

    console.log("hola");
    console.log("yep", this.state.contract);
    return (
      <div>
        {this.state.contract.user && (
          <div>
            <h2>{this.state.contract.user.firstName}</h2>
            <h3>
              {this.state.contract.contractType}{" "}
              {this.state.contract.contractCode}
            </h3>
            <p>Start Date: {this.state.contract.startDate}</p>
            <p>End Date: {this.state.contract.endDate}</p>
            <p>WorK per Day: {this.state.contract.worDay}</p>
            <p>WorK Hours: {this.state.contract.workHours}</p>
            <p>Category: {this.state.contract.category}</p>
            <p>Job Role: {this.state.contract.jobRole}</p>
            <p>Salay: {this.state.contract.salary}</p>
            <p>Bonus: {this.state.contract.bonus}</p>
            <p>Education Level: {this.state.contract.educationLevel}</p>
            <p>Vacation Days: {this.state.contract.vacationDays}</p>
            <p>Aditional Clauses: {this.state.contract.aditionalClauses}</p>

            <Link
              to={`/employee/${this.state.contract.user.id}/contract/${this.state.contract.id}`}
            >
              <button>Edit Contract</button>
            </Link>

            {this.props.user &&
              this.state.contract.user.id !== this.props.user.id && (
                <button
                  className="button"
                  onClick={() => this.delete(this.state.contract._id)}
                ></button>
              )}
          </div>
        )}
      </div>
    );
  }
}

export default withAuth(ContractInformation);
