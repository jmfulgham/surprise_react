import React from 'react';
import SurpriseImage from './surprise-image';

// function handleClick(){
//   console.log(this)
//   this.setState({clicked:true});
// }

function showImage() {
      return <SurpriseImage />
    }
      

export default class SurpriseButton extends React.Component {
  constructor(props){
  super(props);
  this.state = {clicked: false};
   this.handleClick= this.handleClick.bind(this);// bind this to the button component
    //so when we call the component somewhere else, the context doesn't change
    //() => this.handleClick() -handles bind/this by default
   }
  
 handleClick(){
   console.log("clicky");
  this.setState({clicked:true});
}
  
  
  render(){
    //state is true down here
    
        if (this.state.clicked === true) {
          return showImage()} 
      
      else {
           console.log(this.state);
    return (<button onClick={this.handleClick}>Surprise</button>)
            }
            }
            }