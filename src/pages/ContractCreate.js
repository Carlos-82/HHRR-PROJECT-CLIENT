import React, { Component } from "react";
import adminContracts from "../lib/adminContracts";
import { withAuth } from "../lib/AuthProvider";

class ContractCreate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: "",
      endDate: "",
      contractType: "",
      contractCode: "",
      workDay: "",
      workHours: "",
      category: "",
      jobRole: "",
      salary: "",
      bonus: "",
      educationLevel: "",
      vacationDays: "",
      aditionalClauses: "",
    };
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

    const newContract = {
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
    };
    const { employeeId } = this.props.match.params;

    adminContracts
      .contractCreate({ employeeId, newContract })
      .then(this.setState(newContract))
      .then(this.props.history.push(`/admin/employee/${employeeId}/contract`))
      .catch(() => {
        this.setState({
          error: "There was an error during the contract creation",
        }); //seteas el mensaje de error
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "contractType") {
      this.setState({ error: "" });
    }
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
    return (
      <div className="containerform">
        <h3 className="">Contract Form</h3>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Start Date:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="date"
                name="startDate"
                value={startDate}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">End Date</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="date"
                name="endDate"
                value={endDate}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Contract Type:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="contractType"
                value={contractType}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Contract Code:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="contractCode"
                value={contractCode}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Category:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="category"
                value={category}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Job Role:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="jobRole"
                value={jobRole}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Work Day:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="workDay"
                value={workDay}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Work Hpurs:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="workHours"
                value={workHours}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Salary:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="salary"
                value={salary}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Bonus:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="bonus"
                value={bonus}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Education:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="text"
                name="educationLevel"
                value={educationLevel}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Vacations:</label>
            <div className="col-sm-10">
              <input
                className="form-control"
                type="number"
                name="vacationDays"
                value={vacationDays}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group">
            <label className="label">Aditional Clauses:</label>
            <textarea
              name="adtionalClauses"
              className="form-control"
              value={aditionalClauses}
              onChange={this.handleChange}
              cols="30"
              rows="10"
            />{" "}
          </div>

          <div className="buttoncompany">
            <p>{this.state.error}</p> {/* muestras el mensaje de error  */}
            <button
              type="submit"
              disabled={
                !!this.state.error
                /* se desabilita el button cuando hay un error */
              }
              className="buttonprofile btn"
            >
              Submit Contract
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(ContractCreate);
