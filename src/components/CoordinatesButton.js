// Code CoordinatesButton Component Here
import React from 'react'

class CoordinatesButton extends React.Component {
    render() {
        return(
            <button onClick={this.createArray}>Text</button>
        )
    }

    createArray = (event) => {
        console.log(this.props.onReceiveCoordinates([event.clientX, event.clientY]))
        
    }
}

export default CoordinatesButton;