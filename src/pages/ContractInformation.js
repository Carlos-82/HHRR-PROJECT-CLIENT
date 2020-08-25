import React, { Component } from "react";
import { Link } from "react-router-dom";

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
            {/* 
            <p>Start Date: {contract.startDate}</p>
            <p>End Date: {contract.endDate}</p>
            <p>Contract Type: {contract.contractType}</p>
            <p>Contract Code: {contract.contractCode}</p>
            <p>WorK per Day: {contract.worDay}</p>
            <p>WorK Hours: {contract.workHours}</p>
            <p>Category: {contract.category}</p>
            <p>Job Role: {contract.jobRole}</p>
            <p>Salay: {contract.salary}</p>
            <p>Bonus: {contract.bonus}</p>
            <p>Education Level: {contract.educationLevel}</p>
            <p>Vacation Days: {contract.vacationDays}</p>
            <p>Aditional Clauses: {contract.aditionalClauses}</p>

            <Link to={`/employee/${contract.user.id}/contract/${contract.id}`}>
              <button>Edit Contract</button>
            </Link>

            {this.props.user && contract.user.id !== this.props.user.id && (
              <button
                className="button"
                onClick={() => this.delete(contract._id)}
              ></button> 
            )} */}
          </div>
        )}
      </div>
    );
  }
}

export default ContractInformation;
