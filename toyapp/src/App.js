import React, { Component } from "react";
import "./App.css";
import Table from "./table";
import { directive } from "@babel/types";

class App extends Component {
  render() {
    const characters = [
      {
        name: "Charlie",
        job: "Janitor"
      },
      {
        name: "Mac",
        job: "Bouncer"
      },
      {
        name: "Dee",
        job: "Aspring actress"
      },
      {
        name: "Dennis",
        job: "Bartender"
      }
    ];

    return (
      <div className="App">
        <h1>hello Myself!</h1>
        <Table characterData={characters} />
      </div>
    );
  }
}

export default App;
