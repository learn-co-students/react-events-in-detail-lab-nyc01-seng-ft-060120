import React from 'react'

class DelayedButton extends React.Component {

    clickDelay = (event) => {
        event.persist()
        window.setTimeout(() => this.props.onDelayedClick(event), this.props.delay)
    }

    render(){
        return (
            <div>
                <h1> delay button</h1>
                <button onClick={this.clickDelay} >Delayed</button>
            </div>
        )
    }
}
export default DelayedButton
