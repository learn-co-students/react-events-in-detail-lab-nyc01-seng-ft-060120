// Code DelayedButton Component Here
import React from 'react'

class DelayedButton extends React.Component {

    click = (e) => {
        e.persist()
        let del = this.props.onDelayedClick(e)
        setTimeout(() => { del }, this.props.delay)

    }

    render () {
        return <button onClick={this.click}>Delayed</button>
    }
}

export default DelayedButton