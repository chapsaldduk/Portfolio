import React from 'react';
import { Component } from 'react';
import { render } from '@testing-library/react';
//style
import './style/App.css';
import './style/css.scss';
//component
import Content from './component/Content.js'
import Navigation from './component/navigation';
//src
// import profile from './image/img.jpg';


class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      mode:'main',
      contents:[
        {id:1, title:"Chapsaldduk", desc:"Wecome to my Portfolio page"},
        {id:2, title:"", desc:""},
        {id:3, title:"", desc:""},
      ],
    }
  }

  hideProfile(){
    
  }


  render(){
    console.log("App render");
    return (
      <div className="App">
        <Navigation></Navigation>
          <div id="profile_image">
            <img src="img/me.png" className='profile_image'/>
          </div>
        <Content title={this.state.contents[0].title} desc={this.state.contents[0].desc}></Content>
      </div>
    );
  }
  
}

export default App;


