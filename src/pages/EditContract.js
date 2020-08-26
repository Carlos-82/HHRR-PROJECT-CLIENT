import React, { Component } from "react";
import adminContracts from "../lib/adminContracts";
import { withAuth } from "../lib/AuthProvider";

class ContractEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { employeeId, contractId } = this.props.match.params;

    adminContracts.OneContract(employeeId, contractId).then((contract) => {
      console.log(contract);
      this.setState(contract);
    });
  }

  handleFormSubmit = (event) => {
    event.preventDefault();

    const {
      startDate,
      endDate,
      contractType,
      contractCode,
      workDay,
      workHours,
      category,
      jobRole,
      salary,
      bonus,
      educationLevel,
      vacationDays,
      aditionalClauses,
    } = this.state;

    const { employeeId, contractId } = this.props.match.params;

    adminContracts
      .editContract(employeeId, contractId, {
        startDate,
        endDate,
        contractType,
        contractCode,
        workDay,
        workHours,
        category,
        jobRole,
        salary,
        bonus,
        educationLevel,
        vacationDays,
        aditionalClauses,
      })
      .then((contract) => {
        console.log(contract);
        this.props.history.push("/admin");
      })
      .catch(() => {
        this.setState({ error: "Los datos introducidos son incorrectos" }); //setetas el mensaje de error
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const {
      startDate,
      endDate,
      contractType,
      contractCode,
      workDay,
      workHours,
      category,
      jobRole,
      salary,
      bonus,
      educationLevel,
      vacationDays,
      aditionalClauses,
    } = this.state;
    console.log("jojojo", this.state);
    return (
      <div className="container">
        <section className="section">
          <div className="page-body">
            <h3 className="">Contract Form</h3>
            <form onSubmit={this.handleFormSubmit}>
              <div className="field">
                <label className="label">Start Date:</label>
                <input
                  className="input"
                  type="date"
                  name="startDate"
                  value={startDate}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">End Date: </label>
                <input
                  className="input"
                  type="date"
                  name="endDate"
                  value={endDate}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Contract Type:</label>
                <input
                  className="input"
                  type="text"
                  name="contractType"
                  value={contractType}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Contract Code:</label>
                <input
                  className="input"
                  type="number"
                  name="contractCode"
                  value={contractCode}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Work per Day:</label>
                <input
                  className="input"
                  type="text"
                  name="WorkDay"
                  value={workDay}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Work Hours:</label>
                <input
                  className="input"
                  type="number"
                  name="workHours"
                  value={workHours}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Category: </label>
                <input
                  className="input"
                  type="text"
                  name="category"
                  value={category}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Job Role: </label>
                <input
                  className="input"
                  type="text"
                  name="jobRole"
                  value={jobRole}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Salary: </label>
                <input
                  className="input"
                  type="number"
                  name="salary"
                  value={salary}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Bonus: </label>
                <input
                  className="input"
                  type="number"
                  name="bonus"
                  value={bonus}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Education Level:</label>
                <input
                  className="input"
                  type="text"
                  name="educationLevel"
                  value={educationLevel}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Vacation Days:</label>
                <input
                  className="input"
                  type="number"
                  name="vacationDays"
                  value={vacationDays}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Aditional Clauses:</label>
                <textarea
                  name="adtionalClauses"
                  className="textArea"
                  value={aditionalClauses}
                  onChange={this.handleChange}
                  cols="30"
                  rows="10"
                />{" "}
              </div>

              <div className="buttonDiv">
                <p>{this.state.error}</p> {/* muestras el mensaje de error  */}
                <button
                  type="submit"
                  disabled={
                    !!this.state.error
                    /* se desabilita el button cuando hay un error */
                  }
                  className="button"
                >
                  Submit Contract
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withAuth(ContractEdit);
