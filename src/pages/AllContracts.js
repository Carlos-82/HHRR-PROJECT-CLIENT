import React, { Component } from "react";

import adminContracts from "../lib/adminContracts";

class AllContracts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allContracts: [],
    };
  }

  componentDidMount() {
    const id = this.props.match.params;
    adminContracts.allContracts(id).then((user) => {
      console.log("Roooon", user);
      this.setState({ allContracts: user.contract });
    });
  }

  render() {
    const { allContracts } = this.state;
    console.log("miau", this.state);
    console.log("guau", allContracts);
    return (
      <div>
        {allContracts &&
          allContracts.map((contract) => {
            return (
              <div key={contract._id}>
                <p>{`${contract.contractType} ${contract.startDate || ""}`}</p>
                <p>{contract.endDate}</p>
                {/*  <Link to={`/admin/employee/${employee._id}`}>
                    <button>Profile</button>
                  </Link>
                  {employee._id !== this.props.user._id && (
                    <button
                      className="button"
                      onClick={() => this.delete(employee._id)}
                    >
                      Delete
                    </button>
                  )} */}
              </div>
            );
          })}
      </div>
    );
  }
}

export default AllContracts;
