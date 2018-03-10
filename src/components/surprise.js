import React from 'react';

import SurpriseButton from './surprise-button';
import SurpriseImage from './surprise-image';


      

    
function showImage() {
      return <SurpriseImage />
    }

export default class Surprise extends React.Component {
    constructor() {
        super();
      this.state= {clicked: false}
    }
   
  myFunction(){
    this.setState({clicked: true})
  }
  
  showButton(){
    return <SurpriseButton functionFromParent={()=>this.myFunction()} />
  }
  
    render() {
      if (this.state.clicked === true) {
          return showImage()
      } else {    
        console.log(this.state);
        return this.showButton()
      }
    }
}