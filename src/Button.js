import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <button
        type="button"
        className="button"
        aria-label="Show the list"
        onClick={this.props.toggleList}
      />
    );
  }
}

export default Button;