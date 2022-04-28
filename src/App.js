import React from "react";
//style
import "./style/App.css";
import "./style/css.scss";
import "./style/animation.scss";
//component
import Content from "./component/Content.js";
import Profile from "./component/profile.js";

function App() {
  return (
    <div className="App">
      <div className="section_one">
        <div className="mainFlexBox">
          <Profile></Profile>
          <Content
            title="Chapssalduk"
            desc="Welcome to my portfolio!"
          ></Content>
        </div>
      </div>
    </div>
  );
}

export default App;
