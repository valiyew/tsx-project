import React, { Component } from "react";
import GenresSCSS from "./genres.module.scss";
import axios from "axios";

const baseURL = "https://pdp-movies-78.onrender.com/api";

interface genre {
  id: number;
  name: string;
}

interface genreState {
  genres: genre[];
}

export default class Genres extends Component<{}, genreState> {
  state: genreState = {
    genres: [],
  };

  genreAllTable = () => {
    
  };

  async componentDidMount() {
    try {
      const { data: genres } = await axios(`${baseURL}/genres`);
      console.log(genres);

      this.setState({ genres });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { genres } = this.state;
    return (
      <div className={GenresSCSS.container}>
        <div className={GenresSCSS.genres}>
          <button className={GenresSCSS.genre}>All Genres</button>
          {genres.map((genre) => (
            <button key={genre.id} className={GenresSCSS.genre}>
              {genre.name}
            </button>
          ))}
        </div>
      </div>
    );
  }
}
