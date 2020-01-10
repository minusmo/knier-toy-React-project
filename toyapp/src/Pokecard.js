import React, { Component } from "react";
import "./pokecard.css";

class Pokecard extends Component {
  render() {
    const pokedata = this.props.pokedata;
    return (
      <div className="pokecard">
        <div className="name">{pokedata.name}</div>
        <img
          src={
            "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" +
            pokedata.id +
            ".png"
          }
        />
        <div className="type">Type: {pokedata.type}</div>
        <div className="base_experience">EXP: {pokedata.base_experience}</div>
      </div>
    );
  }
}

export default Pokecard;
