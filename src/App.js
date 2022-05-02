import React from "react";
//style
import "./style/App.css";
import "./style/css.scss";
import "./style/animation.scss";
//component
import Content from "./component/Content.js";
import Profile from "./component/profile.js";
import ScrollBar from "./component/ScrollBar";
import Footer from "./component/Footer.js";

function App() {
  return (
    <div className="App">
      <ScrollBar></ScrollBar>
      <div id="One" className="section_one">
        <div className="mainFlexBox">
          <Profile></Profile>
          <Content
            title="Chapssalduk"
            desc="Welcome to my portfolio!"
          ></Content>
          <a href="#Two">
            <button className="start_button">
              <h5>Get Start</h5>
            </button>
          </a>
        </div>
      </div>
      <div id="Two" className="section_two">
        asd
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
