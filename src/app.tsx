import React, { Component } from "react";
import Board from "./components/board/board";
import Histories from "./components/histories";

type Player = "X" | "O";
type IBoard = (Player | null)[];

export interface AppState {
  board: IBoard;
  histories: IBoard[];
  nextPlayer: Player;
  winner?: Player;
  currentIdx: number;
}


export default class App extends React.Component<{}, AppState> {
  state: AppState = {
    board: new Array(9).fill(null),
    histories: [new Array(9).fill(null)],
    nextPlayer: "X",
    currentIdx: 0,
    // winner: "X"
  };

  
  handleCell = (idx: number) => {
    const board = [...this.state.board];
    let { nextPlayer, histories, currentIdx } = this.state;

    if (board[idx]) return;

    board[idx] = nextPlayer;
    nextPlayer = nextPlayer === "X" ? "O" : "X";

    this.setState({ board, nextPlayer, histories: [...histories.splice(0, currentIdx + 1), board], currentIdx: currentIdx + 1 });
  };

  handleHistory = (idx: number) => {
    const { histories } = this.state;
    const board = [...histories[idx]];

    this.setState({ board, currentIdx: idx });
  };

  render() {
    const { board, nextPlayer, histories, currentIdx, winner } = this.state;
    return (
      <main className="container" style={{ display: "flex", gap: "50px" }}>
        <Board board={board} onCell={this.handleCell} />
        <Histories onHistory={this.handleHistory} winner={winner!} currentIdx={currentIdx} nextPlayer={nextPlayer} histories={histories} />
      </main>
    );
  }
}
