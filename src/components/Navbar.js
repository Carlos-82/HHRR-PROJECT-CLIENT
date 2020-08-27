import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "../lib/AuthProvider";
import logo from "../assets/logohr1.png";

class Navbar extends Component {
  render() {
    const { user, logout, isLoggedin } = this.props;
    return (
      <nav className="navbar">
        {isLoggedin && user.admin && (
          <div className="navigation">
            <>
              <Link to="/admin" id="home-btn">
                <img className="logo" src={logo} alt="logo" />
              </Link>
              <p className="navbar-user">Hello {user.firstName}</p>
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
          </div>
        )}

        {isLoggedin && !user.admin && (
          <>
            <Link to="/user" id="home-btn">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <button className="navbar-button" onClick={logout}>
              Logout
            </button>
          </>
        )}

        {!isLoggedin && (
          <>
            <Link to="/" id="home-btn">
              <img className="logo" src={logo} alt="logo" />
            </Link>
            <div className="containerbuttons">
              <Link to="/login">
                <button className="navbar-button">Login</button>
              </Link>
              <br />
              <Link to="/signup">
                <button className="navbar-button">Sign Up</button>
              </Link>
            </div>
          </>
        )}
      </nav>
    );
  }
}

export default withAuth(Navbar);
