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
      <div className="container">
        <section className="section">
          <div className="page-body">
            <h3 className="">Create Your Company</h3>
            <form onSubmit={this.handleFormSubmit}>
              <div className="field">
                <label className="label">Register Name:</label>
                <input
                  className="input"
                  type="text"
                  name="registerName"
                  value={registerName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Trade Name:</label>
                <input
                  className="input"
                  type="text"
                  name="tradeName"
                  value={tradeName}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">CIF:</label>
                <input
                  className="input"
                  type="text"
                  name="CIF"
                  value={CIF}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">CCC:</label>
                <input
                  className="input"
                  type="number"
                  name="CCC"
                  value={CCC}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Address:</label>
                <input
                  className="input"
                  type="text"
                  name="companyAddress"
                  value={companyAddress}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Postal Code:</label>
                <input
                  className="input"
                  type="number"
                  name="postalCode"
                  value={postalCode}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Country:</label>
                <input
                  className="input"
                  type="text"
                  name="country"
                  value={country}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Legal Personality</label>
                <div className="select">
                  <select
                    name="legalPersonality"
                    value={legalPersonality}
                    onChange={this.handleChange}
                  >
                    <option value="fisica">Fisica</option>
                    <option value="juridica">Juridica</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="label">Register Date:</label>
                <input
                  className="input"
                  type="date"
                  name="registerDate"
                  value={registerDate}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Collective Agreement:</label>
                <input
                  className="input"
                  type="text"
                  name="colectiveAgreement"
                  value={colectiveAgreement}
                  onChange={this.handleChange}
                />
              </div>

              <div className="field">
                <label className="label">Mutual Insurance:</label>
                <input
                  className="input"
                  type="text"
                  name="mutualInsurance"
                  value={mutualInsurance}
                  onChange={this.handleChange}
                />
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
                  Submit Company
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    );
  }
}

export default withAuth(CompanyCreate);
