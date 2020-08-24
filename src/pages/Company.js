import React, { Component } from "react";
import { Link } from "react-router-dom";

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
    return (
      <div>
        <h2>{companyInfo.registerName}</h2>
        <h3>{companyInfo.tradeName}</h3>
        <p>CIF: {companyInfo.CIF}</p>
        <p>CCC: {companyInfo.CCC}</p>
        <p>Adress: {companyInfo.adress}</p>
        <p>Postal Code: {companyInfo.postalCode}</p>
        <p>Country: {companyInfo.country}</p>
        <p>Register Date:{companyInfo.registerDate}</p>
        <p>Legal Personality:{companyInfo.legalPersonality}</p>
        <p>Colective Agreement: {companyInfo.colectiveAgreement}</p>
        <p>Mutual Insurance: {companyInfo.mutualInsurance}</p>

        <Link to={`/admin/company/${companyInfo._id}`}>
          <button>Edit Company</button>
        </Link>
      </div>
    );
  }
}

export default Company;
