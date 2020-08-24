import React, { Component } from "react";
import { withAuth } from "../lib/AuthProvider";

class Admin extends Component {
  componentDidMount() {
    if (this.props.user && !this.props.user.admin) {
      this.props.history.push("/user");
    } else if (!this.props.user) {
      this.props.history.push("/");
    }
  }

  render() {
    return (
      <>
        <h1>Welcome {this.props.user.username}</h1>
      </>
    );
  }
}

export default withAuth(Admin);
