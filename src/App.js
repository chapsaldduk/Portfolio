import React from "react";
//style
import "./style/App.css";
import "./style/css.scss";
import "./style/animation.scss";
//component
import Content from "./component/Content.js";
import Profile from "./component/profile.js";
import ScrollBar from "./component/ScrollBar";

function App() {
  return (
    <div className="App">
      <ScrollBar></ScrollBar>
      <div className="section_one">
        <div className="mainFlexBox">
          <Profile></Profile>
          <Content
            title="Chapssalduk"
            desc="Welcome to my portfolio!"
          ></Content>
          <a href="./page/page01.js">asd</a>
        </div>
      </div>
      <div className="section_two">asd</div>
    </div>
  );
}

export default App;
