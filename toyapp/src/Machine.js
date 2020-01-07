import React, { Component } from "react";

class Machine extends Component {
  ranSyms = [this.props.s1, this.props.s2, this.props.s3];

  getResult = () => {
    if (
      this.ranSyms[0] === this.ranSyms[1] &&
      this.ranSyms[0] === this.ranSyms[2]
    ) {
      return "Your Win!";
    } else {
      return "Your Lose!";
    }
  };

  render() {
    return (
      <div className="machine">
        <div className="symbols">{this.ranSyms}</div>
        <div className="result">{this.getResult()}</div>
      </div>
    );
  }
}

export default Machine;
