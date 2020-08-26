import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

import adminCompany from "../lib/adminCompany";

class Company extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: {},
    };
  }

  componentDidMount() {
    adminCompany
      .getCompany()
      .then((company) => {
        console.log(company);
        this.setState({ company });
      })
      .catch(() => {
        this.setState({ error: "Sorry but we can't acces to the Company" }); //setetas el mensaje de error
      });
  }

  render() {
    const companyInfo = this.state.company;
    return companyInfo ? (
      <div>
        <div className="card">
          <div className="card-header">
            <h2>{companyInfo.tradeName}</h2>
            <h3>{companyInfo.registerName}</h3>
          </div>
          <div className="list-group list-group-flush">
            <p className="list-group-item">CIF: {companyInfo.CIF}</p>
            <p className="list-group-item">CCC: {companyInfo.CCC}</p>
            <p className="list-group-item">
              Adress: {companyInfo.companyAddress}
            </p>
            <p className="list-group-item">
              Postal Code: {companyInfo.postalCode}
            </p>
            <p className="list-group-item">Country: {companyInfo.country}</p>
            <p className="list-group-item">
              Register Date:{companyInfo.registerDate}
            </p>
            <p className="list-group-item">
              Legal Personality:{companyInfo.legalPersonality}
            </p>
            <p className="list-group-item">
              Colective Agreement: {companyInfo.colectiveAgreement}
            </p>
            <p className="list-group-item">
              Mutual Insurance: {companyInfo.mutualInsurance}
            </p>
          </div>
        </div>
        <div className="buttoncontainer buttoncompany">
          <Link to={`/admin/company/${companyInfo._id}`}>
            <button className="buttonedit btn btn-lg ">Edit Company</button>
          </Link>
          <Link to={`/admin`}>
            <button className=" buttonprofile btn btn-lg">Home</button>
          </Link>
        </div>
      </div>
    ) : (
      <div>
        <div>Loading</div>
      </div>
    );
  }
}

export default withAuth(Company);
