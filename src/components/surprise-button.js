import React from 'react';
      
export default class SurpriseButton extends React.Component {
 handleClick(){
  console.log("clicky");
  this.props.functionFromParent();
}
  
  
  render(){
    return (<button onClick={() => this.handleClick()}>Surprise</button>)
            
            }
            }