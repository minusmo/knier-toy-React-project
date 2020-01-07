import React, { Component } from "react";
import "./App.css";
import { directive } from "@babel/types";
import Machine from "./Machine";

class SlotApp extends Component {
  symbols = ["*", "#", "@"];

  ranSym = () => {
    let ranNum = Math.floor(Math.random() * 2);
    return this.symbols[ranNum];
  };

  render() {
    return (
      <div id="slotApp">
        <h1>Slot Machines!</h1>
        <Machine s1={this.ranSym()} s2={this.ranSym()} s3={this.ranSym()} />
        <Machine s1={this.ranSym()} s2={this.ranSym()} s3={this.ranSym()} />
        <Machine s1={this.ranSym()} s2={this.ranSym()} s3={this.ranSym()} />
      </div>
    );
  }
}

export default SlotApp;
