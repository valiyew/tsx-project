import React, { Component } from "react";
import { IEntity } from "../../services/type";

interface MovieProps {
  movies: IEntity.Movie[];
}

export default class MoviesList extends Component<MovieProps> {
  render() {
    const { movies } = this.props;

    return (
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Username</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, idx) => (
              <tr>
                <td>{idx + 1}</td>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.username}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td></td>
                <td>
                  <button className="btn btn-danger">Delete</button>
                </td>
              </tr>
            ))} 
          </tbody>
        </table>
      </div>
    );
  }
}
