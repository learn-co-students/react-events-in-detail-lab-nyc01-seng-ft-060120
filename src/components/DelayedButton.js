// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {
    render() {
        return(
            <button onClick={this.onClick}>More Text</button>
        )
    }

    onClick = (event) => {
        event.persist()
        window.setTimeout(() => {
            this.props.onDelayedClick(event)
        })
        this.props.delay
    }
}

export default DelayedButton;