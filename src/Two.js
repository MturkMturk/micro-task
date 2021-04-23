import './App.css';
import React, { Component } from "react"
import Iframe from "./iframe.js"

class Two extends Component{
  render(){
    return (
      <div>
        <Iframe
          url="https://cdn.jwplayer.com/players/B9k3Ngh3-PzqYXf16.html"
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
  }
}

export default Two;
