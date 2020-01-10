import React, { Component } from "react";
import "./Die.css";

class Die extends Component {
  render() {
    let stringNum;

    switch (this.props.dieNum) {
      case 1:
        stringNum = "one";
        break;
      case 2:
        stringNum = "two";
        break;
      case 3:
        stringNum = "three";
        break;
      case 4:
        stringNum = "four";
        break;
      case 5:
        stringNum = "five";
        break;
      default:
        stringNum = "six";
    }
    return (
      <i
        className={`fas fa-dice-${stringNum} ${
          this.props.isRolling ? "isRolling" : ""
        }`}
      ></i>
    );
  }
}

export default Die;
