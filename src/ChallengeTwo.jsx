import React, { Component } from 'react';

export default class ChallengeTwo extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', input: "", output: null};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    let input = this.state.value;
    let charCount = 0;
    let currentCharacter = input[0];
    let output = "";

    for (let i = 0; i < input.length; i++) {
        if (currentCharacter === input[i]) {
            charCount++;
            continue;
        }
        output += currentCharacter + charCount;
        currentCharacter = input[i];
        charCount = 1;
    }
    if (charCount) {
        output += currentCharacter + charCount;
    }
    this.setState({input: this.state.value, output: output, value: ""});
    event.preventDefault();
  }
  render() {
    return (
      <div className="challenge-container">
        <div className="challenge-question panel panel-default">
          <h2>Exercise Two</h2>
          <p>String: Manipulate strings with repeating characters aaabbbbccccc > a3b4c5</p>
          <p>Objective: Take each repeated letter in a string, and re-arrange the string so each letter in the</p>
          <p>string is shown once along with the number of times it is repeated. Do this serialized for each</p>
          <p>instance of any letter, and not for the total number of times that letter is shown in the string.</p>
        </div>

        <div className="challenge-form">
          <form onSubmit={this.handleSubmit}>
            <label>
              Input: &nbsp;
              <input type="text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Convert" className="btn-primary"/>
          </form>
        </div>
        {
          this.state.output ? 
            <div className="alert alert-info">
              <strong>Input:</strong> {this.state.input}
              <br/>
              <strong>Output:</strong> {this.state.output}
            </div> 
          : null
        }
      </div>
    );
  }
}
