import React from 'react';

class DelayedButton extends React.Component {

    clickHandler = (e) => {   
        this.props.onReceiveCoordinates([e.clientX, e.clientY]);
    }

    render() {
        return (
        <button onClick={this.clickHandler}>
        heloo
        </button>
        )
    }
}

export default DelayedButton;