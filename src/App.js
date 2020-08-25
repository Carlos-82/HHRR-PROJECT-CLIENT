import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CompanyCreate from "./pages/CompanyCreate";
import EditCompany from "./pages/EditCompany";
import CreateEmployee from "./pages/CreateEmployee";
import Company from "./pages/Company";
import Admin from "./pages/Admin";
import EditEmployee from "./pages/EditEmployee";
import EmployeeInformation from "./pages/EmployeeInformation";
import ContractCreate from "./pages/ContractCreate";
import ContractInformation from "./pages/ContractInformation";
import AllContracts from "./pages/AllContracts";
import AnonRoute from "./components/AnonRoute";
import PrivateRoute from "./components/PrivateRoute";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <div className="container">
          <Navbar />

          <Switch>
            <PrivateRoute
              component={CompanyCreate}
              path="/admin/company/create"
            />
            <PrivateRoute
              component={EditCompany}
              exact
              path="/admin/company/:id"
            />
            <PrivateRoute
              component={CreateEmployee}
              exact
              path="/admin/employee/create"
            />
            <PrivateRoute
              component={EditEmployee}
              exact
              path="/admin/employee/:id/editemployee"
            />
            <PrivateRoute
              component={EmployeeInformation}
              exact
              path="/admin/employee/:id"
            />
            <PrivateRoute
              component={AllContracts}
              path="/admin/employee/:id/contract"
            />
            <PrivateRoute
              component={ContractCreate}
              exact
              path="/admin/employee/:id/contract/create"
            />
            <PrivateRoute
              component={ContractInformation}
              exact
              path="/admin/employee/:employeeId/contract/:contractId"
            />
            <PrivateRoute component={Company} path="/admin/company" />
            <PrivateRoute extact path="/admin" component={Admin} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
