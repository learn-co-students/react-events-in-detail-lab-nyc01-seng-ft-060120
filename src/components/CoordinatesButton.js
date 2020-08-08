import React from 'react'

class CoordinatesButton extends React.Component {

   
    clickButton = (e) => {
        let array = [e.clientX,e.clientY]
        this.props.onReceiveCoordinates(array)
    }

    render(){
        return (
            <div>
                <h1>button</h1>
                <button onClick={this.clickButton}>Click here</button>
            </div>
        )
    }
}
export default CoordinatesButton
