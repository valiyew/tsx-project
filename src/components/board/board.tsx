import { Component } from "react";
import cls from "./boar.module.scss";
import { AppState } from "../../app";

interface BoardProps extends Pick<AppState, "board"> {
  onCell: (idx: number) => void
}

export default function Board({ board, onCell }: BoardProps) {
  return (
    <div className={cls.board}>
      {board.map((board, idx) => (
        <button key={idx} className={cls.cell} onClick={() => onCell(idx)}>{board}</button>
      ))}
    </div>
  );
}
