import React, { Component } from "react";
import Die from "./Die";
import Button from "./Button";

class RollDice extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dieOne: 1,
      dieTwo: 2,
      isRolling: false
    };
    this.roll = this.roll.bind(this);
  }

  roll = e => {
    let ranForOne = Math.floor(Math.random() * 6);
    let ranForTwo = Math.floor(Math.random() * 6);

    this.setState({ dieOne: ranForOne, dieTwo: ranForTwo, isRolling: true });

    setTimeout(() => {
      this.setState({ isRolling: false });
    }, 1000);
  };

  render() {
    return (
      <div>
        <Die dieNum={this.state.dieOne} isRolling={this.state.isRolling} />
        <Die dieNum={this.state.dieTwo} isRolling={this.state.isRolling} />
        <Button isRolling={this.state.isRolling} roll={this.roll} />
      </div>
    );
  }
}

export default RollDice;
