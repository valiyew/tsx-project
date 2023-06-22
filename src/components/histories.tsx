import React, { Component } from "react";
import { AppState } from "../app";

interface HistoriesProps extends Pick<AppState, "histories" | "nextPlayer" | "currentIdx" | "winner"> {
  onHistory: (idx: number) => void;
}

export default function Histories({ histories, nextPlayer, currentIdx, winner, onHistory }: HistoriesProps) {
  return (
    <div className="histories">
      <h1 style={{ margin: "0px" }}>{winner ? `Winner: ${winner} ` : ` Next player: ${nextPlayer}`}</h1>
      {histories.map((h, idx) => (
        <button key={idx} onClick={() => onHistory(idx)} disabled={currentIdx === idx} className="btnHistory">
          {idx === 0 ? `Go to game start` : `Go to move #${idx}`}
        </button>
      ))}
    </div>
  );
}
