import React, { Component } from "react";
import "./colors.css";

class ColorBox extends Component {
  //   static defaultProps = {};
  //   colorPicker = {
  //     "#32a852": "green",
  //     "#3267a8": "blue",
  //     "#9232a8": "magenta",
  //     "#a8327b": "hotpurple",
  //     "#a87b32": "lightbrown",
  //     "#a85132": "brown",
  //     "#3287a8": "mattblue",
  //     "#a83253": "darkred",
  //     "#9ca832": "grassgreen",
  //     "#a2a832": "lightgrass",
  //     "#32a894": "lightteal",
  //     "#a83232": "hotred",
  //     "#a83283": "lightmagenta",
  //     "#3432a8": "darkpurple"
  //   };

  constructor(props) {
    super(props);
    this.state = {
      changes: 0,
      curColor: this.props.defaultColor
    };

    this.handleClick = this.handleClick.bind(this);
  }

  changeColor(e) {
    const colorList = [
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
    ];

    let colorbox = e.target;
    console.log(colorbox);

    let ranColor;
    do {
      let ranInd = Math.floor(Math.random() * colorList.length);
      ranColor = colorList[ranInd];
      console.log(ranColor);
    } while (this.state.curColor === ranColor);

    this.setState(st => {
      let newState = {
        ...st,
        changes: st.changes + 1,
        curColor: ranColor
      };

      return newState;
    });
  }

  handleClick(e) {
    this.changeColor(e);
  }

  render() {
    return (
      <div
        onClick={this.handleClick}
        className="colorbox"
        style={{ backgroundColor: this.state.curColor }}
      ></div>
    );
  }
}

export default ColorBox;
