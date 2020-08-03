import React from 'react';

export default function DelayedButton(props) {

    const clickFn = (e) => {
        e.persist();
        window.setTimeout(()=>props.onDelayedClick(e), props.delay)
    }

    return <button onClick={clickFn}>Delayed</button>
}