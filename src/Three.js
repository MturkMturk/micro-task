import './App.css';
import React, { Component } from "react"
import Iframe from "./iframe.js"

class Three extends Component{
  render(){
    return (
      <div>
        <Iframe
          url="https://cdn.jwplayer.com/players/f9KQ2If1-PzqYXf16.html"
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

export default Three;
