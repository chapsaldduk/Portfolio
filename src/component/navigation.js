import { Component } from 'react';


class Navigation extends Component{
    render(){
        console.log("Navigation render")
        return (
            <div className='navigation'>
                <ul>
                    <li><button onClick={function(e){
                        e.preventDefault();
                    }.bind(this)}>Home</button></li>
                    <li><button>Button</button></li>
                    <li><button>Third Partition</button></li>
                    <li></li>
                </ul>
            </div>
        );
    }
    
  }

export default Navigation;
  