import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        {isLoggedin && user.admin && (
          <>
            <Link to="/admin" id="home-btn">
              <h4>Home</h4>
            </Link>
            <p className="navbar-user">name: {user.firstName}</p>
            {user.companyId ? ( //ternaria que modifica la navbar en funcion de si la empresa esta creada o no
              <Link to="/admin/company">Company</Link>
            ) : (
              <Link to="/admin/company/create">Create Company</Link>
            )}
            <Link to="/admin/employee/create">Create Employee</Link>
            <Link to={`/admin/${user.id}`}>Profile</Link>
            <button className="navbar-button" onClick={logout}>
              Logout
            </button>
          </>
        )}

        {isLoggedin && !user.admin && (
          <>
            <Link to="/user" id="home-btn">
              <h4>Home</h4>
            </Link>
            es user
          </>
        )}

        {!isLoggedin && (
          <>
            <Link to="/" id="home-btn">
              <h4>Home</h4>
            </Link>
            <Link to="/login">
              <button className="navbar-button">Login</button>
            </Link>
            <br />
            <Link to="/signup">
              <button className="navbar-button">Sign Up</button>
            </Link>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
