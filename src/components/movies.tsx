import React, { Component } from "react";
import { IEntity } from "../services/type";
import MoviesList from "./moviesList/moviesList";

interface MovieProps {
  movies: IEntity.Movie[];
  onChangeSearch: (search: string) => void
}

export default class Movies extends Component<MovieProps> {
  render() {
    const {onChangeSearch, movies} = this.props;

    return (
      <>
        <div>
          <button className="btn btn-primary mb-2">Add New</button>{" "}
          <p>Showing {movies.length} movies in the database.</p>
          <input onChange={(e) => onChangeSearch(e.target.value)} type="text" name="quety" className="form-control mb-1" placeholder="Search..." />
        </div>
        <div>
          <MoviesList movies={movies} />
        </div>
      </>
    );
  }
}
