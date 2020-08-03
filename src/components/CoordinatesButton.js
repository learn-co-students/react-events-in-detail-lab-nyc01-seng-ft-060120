import React from 'react';

class CoordinatesButton extends React.Component {
  handleClick = event => {
    this.props.onReceiveCoordinates([event.clientX, event.clientY]);
  };

  render() {
  	console.log(this.props)
    return <button onClick={this.handleClick}>Coords</button>;
  }
}

export default CoordinatesButton;