import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button onClick={this.props.onClick}>Flip Meeee</button>;
  }
}
export default Button;
