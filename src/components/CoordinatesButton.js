import React from 'react';

export default function CoordinatesButton(props) {

    const clickFn = (e) => {
        props.onReceiveCoordinates([e.clientX, e.clientY])
    }

    return <button onClick={clickFn}>Coordinates</button>
}