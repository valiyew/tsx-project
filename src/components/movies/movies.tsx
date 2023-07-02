import React, { Component } from "react";
import MoviesSCSS from "./movies.module.scss";
import axios from "axios";

const baseURL = "https://pdp-movies-78.onrender.com/api";

interface movie {
  id: number;
  title: string;
  genre: { name: string };
  numberInStock: number;
  dailyRentalRate: number;
}

interface moviesState {
  movies: movie[];
}

export default class Movies extends Component<{}, moviesState> {
  state: moviesState = {
    movies: [],
  };

  async componentDidMount() {
    try {
      const { data: movies } = await axios(`${baseURL}/movies`);

      console.log(movies);

      this.setState({ movies });
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className="w-75">
        <div className={MoviesSCSS.movies}>
          <input type="text" className="form-control" placeholder="Search" />
          <button className="btn btn-outline-secondary">Search</button>
        </div>
          <p>Showing {movies.length} movies in the database.</p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, idx) => (
              <tr key={idx}>
                <th>{movie.title}</th>
                <th>{movie.genre.name}</th>
                <th>{movie.numberInStock}</th>
                <th>{movie.dailyRentalRate}</th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
