import React, { Component } from "react";
import Board from "./components/board/board";
import Histories from "./components/histories";

type Player = "X" | "O" | "";
type IBoard = (Player | null)[];

export interface AppState {
  board: IBoard;
  histories: IBoard[];
  nextPlayer: Player;
  winner?: Player;
  currentIdx: number;
  game: boolean;
}

export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    board: new Array(9).fill(null),
    histories: [new Array(9).fill(null)],
    nextPlayer: "X",
    currentIdx: 0,
    winner: "",
    game: true,
  };

  checkWinner = () => {
    const win = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i < win.length; i++) {
      const [a, b, c] = win[i];
      if (this.state.board[a] !== null && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
        return true;
      }
    }
    return false;
  };

  handleCell = (idx: number) => {
    const board = [...this.state.board];
    let { nextPlayer, histories, currentIdx } = this.state;

    if (board[idx]) return;

    if (this.state.game) {
      board[idx] = nextPlayer;
      nextPlayer = nextPlayer === "X" ? "O" : "X";

      this.setState({ board, nextPlayer, histories: [...histories.splice(0, currentIdx + 1), board], currentIdx: currentIdx + 1 });
    }
  };

  checkwin = () => {
    const win = this.checkWinner();
    if (win) {
      this.setState({game: false})
      let value = this.state.nextPlayer === "X" ? "O" : "X";
      return <p style={{color: "green"}}>{value} is winner 🏆</p>;
    }
    return <p>No winner !!!</p>
  };

  handleHistory = (idx: number) => {
    const { histories } = this.state;
    const board = [...histories[idx]];
    this.state.game = true

    this.setState({ board, currentIdx: idx });
  };

  render() {
    const { board, nextPlayer, histories, currentIdx, winner } = this.state;
    return (
      <main className="container" style={{ display: "flex", gap: "50px" }}>
        <Board board={board} onCell={this.handleCell} />
        <Histories onHistory={this.handleHistory} winner={winner!} currentIdx={currentIdx} nextPlayer={nextPlayer} histories={histories} />
        <p className="winnerPlayer">{this.checkwin()}</p>
      </main>
    );
  }
}
