import React, { Component } from "react";
import adminCompany from "../lib/adminCompany";

class CompanyEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log(this.props.history);
    adminCompany.getCompany().then((company) => {
      console.log(company);
      this.setState(company);
    });
  }

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

    const id = this.props.match.params.id;
    adminCompany
      .editCompany(id, {
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
      })
      .then((company) => {
        console.log(company);
        this.props.history.push("/admin/company");
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
    console.log(this.state);
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
                <p>{this.state.error}</p> {/* muestras el mensaje de error */}
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

export default CompanyEdit;
