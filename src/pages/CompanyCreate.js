import React, { Component } from "react";
import adminCompany from "../lib/adminCompany";
import { withAuth } from "../lib/AuthProvider";

class CompanyCreate extends Component {
  state = {
    registerName: "",
    tradeName: "",
    CIF: "",
    CCC: "",
    companyAddress: "",
    postalCode: "",
    country: "",
    registerDate: "",
    legalPersonality: "fisica",
    colectiveAgreement: "",
    mutualInsurance: "",
    error: null,
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const {
      registerName,
      tradeName,
      CIF,
      CCC,
      companyAddress,
      postalCode,
      country,
      registerDate,
      legalPersonality,
      colectiveAgreement,
      mutualInsurance,
    } = this.state;
    console.log("esto es otro punto", this.state);
    const newCompany = {
      registerName,
      tradeName,
      CIF,
      CCC,
      companyAddress,
      postalCode,
      country,
      registerDate,
      legalPersonality,
      colectiveAgreement,
      mutualInsurance,
    };
    console.log("entra aqui", newCompany);
    adminCompany
      .createCompany(newCompany)
      .then((company) => {
        console.log(company);
        this.props.history.push("/admin/company");
      })
      .catch(() => {
        this.setState({ error: "Solo se puede crear una compañia" }); //setetas el mensaje de error
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "name") {
      // resetea el estado del botton despues del error, volviendolo a habilitar cuando se modifica el registerName
      this.setState({ error: "" });
    }
    this.setState({ [name]: value });
  };

  render() {
    const {
      registerName,
      tradeName,
      CIF,
      CCC,
      companyAddress,
      postalCode,
      country,
      registerDate,
      legalPersonality,
      colectiveAgreement,
      mutualInsurance,
    } = this.state;

    return (
      <div className="containerform">
        <h3 className="">Create Your Company</h3>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Registered Name:</label>
            <div className="col-sm-10">
              <input
                placeholder="Registered Company Name"
                className="form-control"
                type="text"
                name="registerName"
                value={registerName}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Trade Name:</label>
            <div className="col-sm-10">
              <input
                placeholder="Trade name of the company"
                className="form-control"
                type="text"
                name="tradeName"
                value={tradeName}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">CIF:</label>
            <div className="col-sm-10">
              <input
                placeholder="CIF"
                className="form-control"
                type="text"
                name="CIF"
                value={CIF}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">CCC:</label>
            <div className="col-sm-10">
              <input
                placeholder="CCC"
                className="form-control"
                type="number"
                name="CCC"
                value={CCC}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Address:</label>
            <div className="col-sm-10">
              <input
                placeholder="address"
                className="form-control"
                type="text"
                name="companyAddress"
                value={companyAddress}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Postal Code:</label>
            <div className="col-sm-10">
              <input
                placeholder="Postal Code"
                className="form-control"
                type="number"
                name="postalCode"
                value={postalCode}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Country:</label>
            <div className="col-sm-10">
              <input
                placeholder="Country"
                className="form-control"
                type="text"
                name="country"
                value={country}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="label">Legal Personality</label>
            <select
              className="form-control"
              name="legalPersonality"
              value={legalPersonality}
              onChange={this.handleChange}
            >
              <option value="fisica">Fisica</option>
              <option value="juridica">Juridica</option>
            </select>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Register Date:</label>
            <div className="col-sm-10">
              <input
                placeholder="Registered Date"
                className="form-control"
                type="date"
                name="registerDate"
                value={registerDate}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="form-group row">
            <label className="col-sm-2 col-form-label">
              Collective Agreement:
            </label>
            <div className="col-sm-10">
              <input
                placeholder="Collective Agreement"
                className="form-control"
                type="text"
                name="colectiveAgreement"
                value={colectiveAgreement}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Mutual Insurance:</label>
            <div className="col-sm-10">
              <input
                placeholder="Mutual Insurance"
                className="form-control"
                type="text"
                name="mutualInsurance"
                value={mutualInsurance}
                onChange={this.handleChange}
              />
            </div>
          </div>

          <div className="buttonDiv">
            <p>{this.state.error}</p> {/* muestras el mensaje de error  */}
            <button
              type="submit"
              disabled={
                !!this.state.error
                /* se desabilita el button cuando hay un error */
              }
              className="btn buttonprofile"
            >
              Submit Company
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(CompanyCreate);
