import React, { Component } from "react";
import { IEntity } from "../services/type";

interface GenreProps {
  genres: IEntity.Genre[];
  onSelectorGenre: (generID: string) => void;
  currentGenerID: string;
}

export default class Genres extends Component<GenreProps> {
  render() {
    const { genres, onSelectorGenre, currentGenerID } = this.props;
    return (
      <div>
        <ul className="list-group">
          {genres.map((genre) => (
            <li
              key={genre._id}
              className={`list-group-item ${genre._id === currentGenerID ? "active" : ""}`}
              onClick={() => onSelectorGenre(genre._id)}
            >
              {genre.name}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
