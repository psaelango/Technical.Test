import React, { Component } from 'react';

export default class ChallengeOne extends Component {
  constructor(props) {
    super(props);
    this.state = {value: '', input: "", output: null};
    this.arrayCharMap = {
      a: "4",
      A: "4",
      e: "3",
      E: "3",
      i: "1",
      I: "1",
      o: "0",
      O: "0",
      s: "5",
      S: "5",
      t: "7",
      T: "7",
      d: "5",
      D: "5"
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    let nameArrVal = this.state.value.split("");
    let output = "";
    for (let i = 0; i < nameArrVal.length; i++) {
      const element = nameArrVal[i];
      output = this.arrayCharMap[element] ? output + this.arrayCharMap[element] : output + element;
    }
    this.setState({input: this.state.value, output: output, value: ""});
    event.preventDefault();
  }
  render() {
    return (
      <div className="challenge-container">
        <div className="challenge-question panel panel-default">
          <h2>Exercise One</h2>
          <p>Leet: L37'5 h4v3 50m3 fun.</p>
          <p>Replace letters in a string with the mapping below:</p>
          <p>[a,A] -> 4 [e,E] -> 3 [i,I] -> 1 [o,O] -> 0 [s,S] -> 5 [t,T] -> 7 [b,D] -> 5</p>
          <p>Note: [o,O] is not an owl face, it's the letter "o" and it should be replaced with a zero.</p>
          <p>Objective: to convert a String into Leet.</p>
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
