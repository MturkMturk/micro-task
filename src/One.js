import './App.css';
import React, { Component } from "react"
import Iframe from "./iframe.js"

class One extends Component{
  render(){
    return (
      <div>
        <Iframe
          url="https://cdn.jwplayer.com/players/iHP1HctW-PzqYXf16.html"
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

export default One;
