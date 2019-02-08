import React, { Component } from 'react';
import ChallengeOne from "./ChallengeOne";
import ChallengeTwo from "./ChallengeTwo";
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <ChallengeOne/>
          <ChallengeTwo/>
        </header>
      </div>
    );
  }
}

