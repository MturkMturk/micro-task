import './App.css';
import React, { PureComponent } from "react"
import Iframe from "./iframe.js"

class App extends PureComponent{
  render(){
    return (
      <div className="App">
        <Iframe
          url="https://cdn.jwplayer.com/players/ECj6NYMl-PzqYXf16.html"
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

export default App;
