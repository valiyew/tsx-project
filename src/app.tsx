import React, { Component } from "react";

export interface SCORE {
  randNumber?: number | null;
  leftAllScore: number;
  rightAllScore: number;
  leftCurrentScore: number;
  rightCurrentScore: number;
  leftPlayer: boolean;
  rightPlayer: boolean;
  firstPlayer: string;
  secondPlayer: string;
}

export default class App extends Component<{}, SCORE> {
  state: SCORE = {
    randNumber: null,
    leftAllScore: 0,
    rightAllScore: 0,
    leftCurrentScore: 0,
    rightCurrentScore: 0,
    leftPlayer: true,
    rightPlayer: true,
    firstPlayer: "Player-1",
    secondPlayer: "Player-2",
  };

  randNumber = () => {
    let randNum = Math.floor(Math.random() * 6) + 1;
    this.setState({ randNumber: randNum });

    if (this.state.leftPlayer) {
      if (randNum === 1) {
        this.setState((prev) => ({ leftCurrentScore: 0 }));
        this.state.leftPlayer = false;
        this.state.rightPlayer = true;
      } else {
        this.setState((prev) => ({ leftCurrentScore: prev.leftCurrentScore + randNum }));
      }
    } else if (this.state.rightPlayer) {
      if (randNum === 1) {
        this.setState((prev) => ({ rightCurrentScore: 0 }));
        this.state.rightPlayer = false;
        this.state.leftPlayer = true;
      } else {
        this.setState((prev) => ({ rightCurrentScore: prev.rightCurrentScore + randNum }));
      }
    }
  };

  handleLeftCurrentScore = () => {
    let allScore = this.state.leftCurrentScore;
    this.setState((prev) => ({ leftAllScore: prev.leftAllScore + allScore, leftCurrentScore: 0 }));
    this.state.randNumber = null;
    this.state.leftPlayer = false;
    this.state.rightPlayer = true;
  };

  handleRightCurrentScore = () => {
    let allScore = this.state.rightCurrentScore;
    this.setState((prev) => ({ rightAllScore: prev.rightAllScore + allScore, rightCurrentScore: 0 }));
    this.state.randNumber = null;
    this.state.rightPlayer = false;
    this.state.leftPlayer = true;
  };
  
  checkWinner = () =>{
    if(this.state.leftAllScore === 20){
      return `Winner is: ${this.state.firstPlayer} 🏆`
    }
    else if(this.state.rightAllScore === 20) {
      return `Winner is: ${this.state.secondPlayer} 🏆`
    }
  }

  handleReset = () => {
    return window.location.reload();
  };

  render() {
    const { leftCurrentScore, randNumber, rightCurrentScore, leftAllScore, rightAllScore } = this.state;

    console.log(this.state.leftAllScore);
    return (
      <div className="container">
        <h1>Pick game</h1>
        <h2>{this.state.leftPlayer ? `Next player : ${this.state.firstPlayer}👈` : `Next player ${this.state.secondPlayer}👉`}</h2>
        <h3 className="winner">{this.checkWinner()}</h3>
        <div className="players">
          <p className="player">Player-1</p>
          <p className="player">Player-2</p>
        </div>

        <div className="pick-game-container">
          <div className="left-player">
            <p className="left-player-all-score">{leftAllScore}</p>
            <h3 className="left-player-current-score">{leftCurrentScore}</h3>
            <button onClick={this.handleLeftCurrentScore}>Click me</button>
          </div>

          <div className="holdSection">
            <div className="randNumber">{randNumber}</div>
            <button className="holdBtn" onClick={this.randNumber}>
              HOLD 🎲
            </button>
          </div>

          <div className="right-player">
            <p className="right-player-all-score">{rightAllScore}</p>
            <h3 className="right-player-current-score">{rightCurrentScore}</h3>
            <button onClick={this.handleRightCurrentScore}>Click me</button>
          </div>
        </div>

        <button className="reset" onClick={this.handleReset}>
          Reset Game
        </button>
      </div>
    );
  }
}
