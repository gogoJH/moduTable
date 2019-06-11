import React, { Component } from "react";
import queryString from "query-string";
// already mentioned the problem of this code.
// when login, you need to call this funcntions once to save token not as a ui component
// need to check if author understands difference b/w utility function and ui component
export default class App2 extends Component {
  render() {
    var { search } = this.props.location;
    const values = queryString.parse(search);
    localStorage.setItem("token", values.token);
    this.props.history.goBack();
    return <div />;
  }
}
