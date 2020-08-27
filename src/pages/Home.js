import React from "react";
import logo from "../assets/logohr.png";

function Home() {
  return (
    <div className="homediv">
      <h1 className="tittle"> Your App </h1>
      <img className="homelogo" src={logo} alt="" />
      <h1 className="tittle">for Human Resources</h1>
    </div>
  );
}

export default Home;
