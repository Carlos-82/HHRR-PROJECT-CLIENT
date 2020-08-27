import React, { Component } from "react";
import adminCompany from "../lib/adminCompany";
import { withAuth } from "../lib/AuthProvider";
import { Link } from "react-router-dom";

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
      companyAddress,
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
        companyAddress,
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
        <h1 className="">Edit Your Company</h1>

        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label">Registered Name:</label>
            <div className="col-sm-10">
              <input
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
                className="form-control"
                type="text"
                name="mutualInsurance"
                value={mutualInsurance}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="buttoncontainer">
            <div className="divbuttons">
              <p>{this.state.error}</p> {/* muestras el mensaje de error */}
              <button
                type="submit"
                disabled={
                  !!this.state.error
                  /* se desabilita el button cuando hay un error */
                }
                className="btn buttonedit"
              >
                Edit Company
              </button>
              <Link to="/admin/company">
                <button className="btn buttonprofile">Back</button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default withAuth(CompanyEdit);
