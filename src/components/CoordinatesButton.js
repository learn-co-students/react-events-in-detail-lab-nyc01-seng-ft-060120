// Code CoordinatesButton Component Here
import React from 'react'

export default class CoordinatesButton extends React.Component {
    render() {
        return (<button onClick={(e => {
            const coords = [e.clientX, e.clientY]
            this.props.onReceiveCoordinates(coords)
        })}></button>)
    }
}