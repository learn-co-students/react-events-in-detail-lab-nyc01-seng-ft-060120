// Code DelayedButton Component Here
import React from 'react'

export default class DelayedButton extends React.Component {
    render() {
        return (<button onClick={e => {
            const event = e
            event.persist()
            setTimeout(()=> {
                // console.log(event)
                this.props.onDelayedClick(event)
            }, this.props.delay)
        }}></button>)
    }
}