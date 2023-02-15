import React from "react";
import { Component } from "react";

export class Welcome extends Component {
  render() {
    return <h1>Welcome {this.props.name} </h1>;
  }
}
