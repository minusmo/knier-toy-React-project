import React, { Component } from "react";
import "./Button.css";

class Button extends Component {
  render() {
    const roll = this.props.roll;
    const isRolling = this.props.isRolling;

    return (
      <button className="rollButton" onClick={roll} disabled={isRolling}>
        {isRolling ? "Rolling..." : "Roll Dice!"}
      </button>
    );
  }
}

export default Button;
