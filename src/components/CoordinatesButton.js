import React, { Component } from 'react'



class CoordinatesButton extends Component {
    clickHandler = (e) => {
        let coordinates = [e.clientX, e.clientY]
        this.props.onReceiveCoordinates(coordinates)
        
    }
    
    render() {
        return <button onClick={this.clickHandler}>Coordinates</button>


    }

}


export default CoordinatesButton