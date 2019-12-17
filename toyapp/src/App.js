import React, { Component } from "react";
import "./App.css";
import Form from "./Form";
import Table from "./table";
import { directive } from "@babel/types";

class App extends Component {
  state = {
    characters: []
  };

  removeChar = index => {
    const character = this.state.characters;

    this.setState({
      characters: character.filter((character, i) => {
        return i !== index;
      })
    });
  };

  handleSubmit = character => {
    this.setState({
      characters: [...this.state.characters, character]
    });
  };

  render() {
    return (
      <div className="Container">
        <h1>hello Myself!</h1>
        <Table
          characterData={this.state.characters}
          removeCharacter={this.removeChar}
        />
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

export default App;
