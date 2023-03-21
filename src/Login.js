import React from "react";
export default class Login extends React.Component {
  state = {
    username: "",
    password: "",
  };
  handleInputChance = (e) => {
    if (e.target.name === "username") {
      this.setState({
        username: e.target.value,
      });
    }
    if (e.target.name === "password") {
      this.setState({
        password: e.target.value,
      });
    }
    console.log(`${this.state.username} ${this.state.password}`);
  };

  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChance}
          />
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleInputChance}
          />
        </form>
      </div>
    );
  }
}
