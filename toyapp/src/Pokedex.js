import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  render() {
    const pokemons = this.props.pokemons;

    return (
      <div id="pokebox">
        <h1>Pokedex</h1>
        {pokemons.map(pokedata => {
          return <Pokecard key={pokedata.id} pokedata={pokedata} />;
        })}
        <h3>Total Experience: {this.props.totExp}</h3>
        <h3>{this.props.isWinner}</h3>
      </div>
    );
  }
}

export default Pokedex;
