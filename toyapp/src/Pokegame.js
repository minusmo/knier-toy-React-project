import React, { Component } from "react";
import Pokedex from "./Pokedex";

class Pokegame extends Component {
  render() {
    const pokemons = this.props.pokemons;

    let dexOne = [];
    let dexTwo = [];
    let dexIsFull = false;

    const makeRanPokedex = () => {
      while (dexIsFull === false) {
        if (dexOne.length === 4) {
          dexIsFull = true;
          dexTwo = [...dexTwo, ...pokemons];
          return;
        } else if (dexTwo.length === 4) {
          dexIsFull = true;
          dexOne = [...dexOne, ...pokemons];
          return;
        }

        let ranNum = Math.floor(Math.random() * 2);

        if (ranNum >= 1) {
          dexOne.push(pokemons.shift());
        } else {
          dexTwo.push(pokemons.shift());
        }
      }
    };

    makeRanPokedex();

    const expOne = dexOne
      .map(pokedata => pokedata.base_experience)
      .reduce((accu, curr) => {
        return accu + curr;
      });

    const expTwo = dexTwo
      .map(pokedata => pokedata.base_experience)
      .reduce((accu, curr) => {
        return accu + curr;
      });

    console.log(expOne);
    console.log(expTwo);

    return (
      <div className="pokeHands">
        <Pokedex
          pokemons={dexOne}
          totExp={expOne}
          isWinner={expOne >= expTwo ? "THIS HAND WINS!!!" : "LOSE"}
        />
        <Pokedex
          pokemons={dexTwo}
          totExp={expTwo}
          isWinner={expOne < expTwo ? "THIS HAND WINS!!!" : "LOSE"}
        />
      </div>
    );
  }
}

export default Pokegame;
