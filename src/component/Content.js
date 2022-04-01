import { Component } from 'react';


class Content extends Component{
    render(){
        console.log("Content render")
        return (
            <div className='content'>
                <h1>{this.props.title}</h1>
                <h2>{this.props.desc}</h2>
            </div>
        );
    }
    
  }
  
export default Content;
  