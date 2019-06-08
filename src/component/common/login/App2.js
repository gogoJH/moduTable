import React, { Component } from "react";
import queryString from "query-string";
// we need to review this component, the purpose of this component
export default class App2 extends Component {
  render() {
    var { search } = this.props.location;
    const values = queryString.parse(search);
    localStorage.setItem("token", values.token);
    this.props.history.goBack();
    return <div />;
  }
}
