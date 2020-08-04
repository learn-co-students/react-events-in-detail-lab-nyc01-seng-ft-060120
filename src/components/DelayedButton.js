import React from 'react';

class DelayedButton extends React.Component {

    clickHandler = (e) => {   
        e.persist();
        window.setTimeout(() => {
        this.props.onDelayedClick(e);
        }, 
        this.props.delay
        );
    }

    render() {
        return <button onClick={this.clickHandler}>Delayed</button>;
      }
}

export default DelayedButton;