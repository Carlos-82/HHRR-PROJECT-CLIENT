import React, { Component } from "react";
import "./App.css";
import { Switch } from "react-router-dom";
import AuthProvider from "./lib/AuthProvider";

import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import CompanyCreate from "./pages/CompanyCreate";
import EditCompany from "./pages/EditCompany";
import Company from "./pages/Company";
import Admin from "./pages/Admin";
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
