import React from "react";
import Login from "./Login";
export default class Button extends React.Component {
  loginFun = () => {};
  resetFun = () => {};
  render() {
    return (
      <div>
        <button onClick={this.loginFun}>Login</button>
        <button onClick={this.resetFun}>Reset</button>
      </div>
    );
  }
}
