import React, { Component } from "react";
import User from "./User";

class About extends Component{
  constructor(props){
    super(props);
    console.log(" parent constructor");
  }

  render(){
    console.log("rebder")
    return (
      <div>
        <div>About class Component </div>
        <User name={"Renil garala"} location={"rajkot"}/>
        <User name={"Rohit Sharma"} location={"My heart"}/>
      </div>
    );
  }
}

export default About;