import './App.css';
import React, { Component } from "react"
import Iframe from "./iframe.js"

class Five extends Component{

  render(){
    console.log("Hello World");
    return (
      <div>
        <Iframe
          url="https://cdn.jwplayer.com/players/dHX8Zatd-PzqYXf16.html"
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

export default Five;
