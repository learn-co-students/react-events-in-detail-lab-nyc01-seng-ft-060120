// Code CoordinatesButton Component Here
import React from 'react'

function CoordinatesButton(props) {
    return <button onClick={event => props.onReceiveCoordinates([event.clientX, event.clientY])}>Button</button>
}

export default CoordinatesButton