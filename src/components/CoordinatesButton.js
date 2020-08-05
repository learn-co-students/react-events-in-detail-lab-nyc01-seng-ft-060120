import React from 'react';

class CoordinatesButton extends React.Component{
  clickHandler = (event) => {
    const coordX = event.clientX 
    const coordY = event.clientY
    let coordArr = []
    coordArr.push(coordX, coordY)
    this.props.onReceiveCoordinates(coordArr)
  }

  render(){
    return(
      <button onClick={this.clickHandler}>Coordinates Button</button>
    )
  }
}


export default CoordinatesButton;


//----------------------------------------------
//DELIVERABLES
//----------------------------------------------

    // In the components/CoordinatesButton.js file, create a CoordinatesButton React component.
  
    // Within CoordinatesButton, render a button. On click of the button, create an array with two elements: the X and Y coordinates of the mouse. Find these using the event data.

    // This component takes in one prop: onReceiveCoordinates. This prop is a function passed down from index.js. This function is currently just logging whatever is passed into it.

    // Pass this event data in as the argument for the onReceiveCoordinates prop.

    // If successful, the current x,y position of your mouse should be logged.

