import React, { Component } from "react";
import "./App.css";
import Pokegame from "./Pokegame";
// import Form from "./Form";
// import Table from "./table";
import { directive } from "@babel/types";
import StateClicker from "./StateCliker";

// class App extends Component {
//   state = {
//     characters: []
//   };

//   removeChar = index => {
//     const character = this.state.characters;

//     this.setState({
//       characters: character.filter((character, i) => {
//         return i !== index;
//       })
//     });
//   };

//   handleSubmit = character => {
//     this.setState({
//       characters: [...this.state.characters, character]
//     });
//   };

//   render() {
//     return (
//       <div className="Container">
//         <h1>hello Myself!</h1>
//         <Table
//           characterData={this.state.characters}
//           removeCharacter={this.removeChar}
//         />
//         <Form handleSubmit={this.handleSubmit} />
//       </div>
//     );
//   }
// }

class App extends Component {
  render() {
    const pokemons = [
      { id: 4, name: "Charmander", type: "fire", base_experience: 62 },
      { id: 7, name: "Squirtle", type: "water", base_experience: 63 },
      { id: 11, name: "Metapod", type: "bug", base_experience: 72 },
      { id: 12, name: "Butterfree", type: "flying", base_experience: 178 },
      { id: 25, name: "Pikachu", type: "electric", base_experience: 112 },
      { id: 39, name: "Jigglypuff", type: "normal", base_experience: 95 },
      { id: 94, name: "Gengar", type: "poison", base_experience: 225 },
      { id: 133, name: "Eevee", type: "normal", base_experience: 65 }
    ];

    return (
      <div>
        <h1>Please refresh it to see other results!</h1>
        <Pokegame pokemons={pokemons} />
        <StateClicker />
      </div>
    );
  }
}

export default App;
