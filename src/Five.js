import React, { Component } from "react";
import Iframe from "./iframe";
import './App.css';

class Five extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: "",
      hasAccess: false,
    };
  }

  handlePasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  checkPassword = () => {
    const correctPassword = "hardcoded"; // Replace with your password
    if (this.state.password === correctPassword) {
      this.setState({ hasAccess: true });
    } else {
      alert("Incorrect password. Please try again.");
    }
  };

  render() {
    if (this.state.hasAccess) {
      return (
        <div>
          <Iframe
            url="https://cdn.jwplayer.com/players/HXtdRpnG-PzqYXf16.html"
            width="450px"
            height="450px"
            id="myId"
            className="myClassname"
            display="initial"
            position="relative"
            allowFullScreen
          />
        </div>
      );
    } else {
      return (
        <div>
          <h2>Please enter the password to view the content</h2>
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
            placeholder="Enter password"
          />
          <button onClick={this.checkPassword}>Submit</button>
        </div>
      );
    }
  }
}

export default Five;
