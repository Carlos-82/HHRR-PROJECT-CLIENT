import React, { Component } from "react";
import adminCompany from "../lib/adminCompany";

class CompanyCreate extends Component {
  state = {
    registerName: "",
    tradeName: "",
    CIF: "",
    CCC: "",
    address: "",
    postalCode: "",
    country: "",
    registerDate: "",
    legalPersonality: "",
    colectiveAgreement: "",
    mutualInsurance: "",
  };

  handleFormSubmit = (event) => {
    event.preventDefault();

    const {
      registerName,
      tradeName,
      CIF,
      CCC,
      address,
      postalCode,
      country,
      registerDate,
      legalPersonality,
      colectiveAgreement,
      mutualInsurance,
    } = this.state;
    const createCompany = {
      registerName,
      tradeName,
      CIF,
      CCC,
      address,
      postalCode,
      country,
      registerDate,
      legalPersonality,
      colectiveAgreement,
      mutualInsurance,
    };

    adminCompany
      .create(createCompany)
      .then(() => {
        this.props.history.push("/company");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (event) => {
    const { input, value } = event.target;
    this.setState({ [input]: value });
  };

  render() {
    const {
      registerName,
      tradeName,
      CIF,
      CCC,
      address,
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
            <form
              onSubmit={this.handleFormSubmit}
              encType="multipart/form-data"
            >
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
                  name="address"
                  value={address}
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
                    <option value="Fisica">Fisica</option>
                    <option value="Juridica">Juridica</option>
                  </select>
                </div>
              </div>

              <div className="field">
                <label className="label">Register Date:</label>
                <input
                  className="input"
                  type="data"
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
                <button type="submit" className="button">
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

export default CompanyCreate;
