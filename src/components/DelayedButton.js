import React, { Component } from 'react'


class DelayedButton extends Component {
    delayedCliker = (e) => {
        return () => {
            this.props.onDelayedClick(e)
        }
    }

    handler = (e) => {
        e.persist()
        setTimeout(
            this.delayedCliker(e),
            this.props.delay
        )
    }
    
    render() {
        return <button onClick={this.handler}>Delay</button>
    }
}


export default DelayedButton