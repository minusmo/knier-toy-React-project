import React from "react";
import "./App.css";
import Coin from "./Coin";
import Button from "./Button";
import ColorBox from "./ColorBox";
import "./colorboxes.css";
import choice from "./choice";

class CoinApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { flips: 0, heads: 0, tails: 0, curSide: "None" };
  }

  handleClick = () => {
    const toss = Math.floor(Math.random() * 2);
    if (toss === 0) {
      this.setState(curState => ({
        ...curState,
        flips: curState.flips + 1,
        heads: curState.heads + 1,
        curSide: "head"
      }));
    } else {
      this.setState(curState => ({
        ...curState,
        flips: curState.flips + 1,
        tails: curState.tails + 1,
        curSide: "tail"
      }));
    }
  };

  render() {
    return (
      <div>
        <h1>Let's flip a coin!</h1>
        {this.state.curSide === "None" ? (
          ""
        ) : (
          <Coin side={this.state.curSide} />
        )}
        <Button onClick={this.handleClick} />
        <h3>{`Out of ${this.state.flips} flips, there have been ${this.state.heads} heads and ${this.state.tails} tails`}</h3>
      </div>
    );
  }
}

class ColorBoxes extends React.Component {
  static defaultProps = {
    boxNumber: 16,
    colorList: [
      "#32a852",
      "#3267a8",
      "#9232a8",
      "#a8327b",
      "#a87b32",
      "#a85132",
      "#3287a8",
      "#a83253",
      "#9ca832",
      "#a2a832",
      "#32a894",
      "#a83232",
      "#a83283",
      "#3432a8"
    ]
  };

  constructor(props) {
    super(props);
    this.state = {
      row1: ["#32a852", "#3267a8", "#9232a8", "#a8327b"],
      row2: ["#a87b32", "#a85132", "#3287a8", "#a83253"],
      row3: ["#9ca832", "#a2a832", "#32a894", "#a83232"],
      row4: ["#32a894", "#a83232", "#a83283", "#3432a8"]
    };
    this.getBoxStates = this.getBoxStates.bind(this);
    this.clickHandler = this.clickHandler.bind(this);
  }

  getBoxStates() {
    let boxes = Array.from(document.getElementsByClassName("colorbox"));

    let boxColors = boxes.map(colorbox => {
      let classname = colorbox.className;
      let color = classname.slice(9);
      return color;
    });

    let curRow1 = boxColors.slice(0, 4);
    let curRow2 = boxColors.slice(4, 8);

    this.setState(st => {
      let newState = {
        ...st,
        row1: curRow1,
        row2: curRow2
      };

      return newState;
    });

    console.log(this.state);
  }

  clickHandler() {
    this.getBoxStates();
  }

  render() {
    let count = 0;
    const boxArr = Array.from({ length: this.props.boxNumber }).map(() => {
      count++;
      return (
        <ColorBox defaultColor={choice(this.props.colorList)} key={count} />
      );
    });

    return (
      <div onClick={this.clickHandler} className="colorBoxes">
        {boxArr}
      </div>
    );
  }
}

class App extends React.Component {
  render() {
    return <ColorBoxes />;
  }
}

export default App;
