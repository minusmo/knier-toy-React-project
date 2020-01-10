import React, { Component } from "react";

class StateClicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rightNumber: false,
      Num: 1
    };
  }

  changeNumber = () => {
    let ranNum = Math.floor(Math.random() * 10);
    this.setState({ Num: ranNum });
    if (ranNum === 7) {
      this.setState({ rightNumber: true });
    }
  };

  render() {
    return (
      <div>
        <p>Number is {this.state.Num}</p>
        <div className="buttonBox">
          {this.state.rightNumber ? (
            "YOU WIN!"
          ) : (
            <button onClick={this.changeNumber} className="button">
              Random Number
            </button>
          )}
        </div>
      </div>
    );
  }
}

export default StateClicker;
