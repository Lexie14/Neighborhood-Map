import React, { Component } from 'react';

class Button extends Component {

  render() {

    return (
      <div className="navigation">
    <button 
    type="button" 
    onClick={this.props.toggleList}
    className="button"
    ></button>
    </div>
  )
}
}

export default Button;