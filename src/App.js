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
import EditContract from "./pages/EditContract";
import User from "./pages/User";
import UserProfile from "./pages/UserProfile";
import UserEdit from "./pages/UserEdit";
import Home from "./pages/Home";
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
              component={UserEdit}
              path="/user/:userId/editprofile"
            />
            <PrivateRoute component={UserProfile} path="/user/:userId" />
            <PrivateRoute component={User} path="/user" />
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
              component={EditEmployee}
              exact
              path="/admin/employee/:id/editemployee"
            />
            <PrivateRoute
              component={CreateEmployee}
              exact
              path="/admin/employee/create"
            />
            <PrivateRoute
              component={EmployeeInformation}
              exact
              path="/admin/employee/:id"
            />
            <PrivateRoute
              component={EditContract}
              exact
              path="/admin/employee/:employeeId/contract/:contractId/editcontract`"
            />
            <PrivateRoute
              component={ContractCreate}
              exact
              path="/admin/employee/:employeeId/contract/create"
            />
            <PrivateRoute
              component={ContractInformation}
              exact
              path="/admin/employee/:employeeId/contract/:contractId"
            />
            <PrivateRoute
              component={AllContracts}
              exact
              path="/admin/employee/:employeeId/contract"
            />
            <PrivateRoute component={Company} path="/admin/company" />
            <PrivateRoute extact path="/admin" component={Admin} />
            <AnonRoute exact path="/" component={Home} />
            <AnonRoute path="/signup" component={Signup} />
            <AnonRoute path="/login" component={Login} />
          </Switch>
        </div>
      </AuthProvider>
    );
  }
}

export default App;
