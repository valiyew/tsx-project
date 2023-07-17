import React, { Component } from "react";
import Genres from "../components/genres";
import Movies from "../components/movies";
import { IEntity } from "../services/type";
import http from "../services/http";

interface HomeState {
  genres: IEntity.Genre[];
  movies: IEntity.Movie[];
  isLoading: boolean;
  currentGenreID: string;
  search: string;
}

export default class Home extends Component<{}, HomeState> {
  state: HomeState = {
    genres: [],
    movies: [],
    isLoading: true,
    currentGenreID: "all",
    search: "",
  };

  handleSelectionGenre = (genreID: string) => {
    this.setState({ currentGenreID: genreID });
  };

  handleMoviesSearch = (search: string) => {
    this.setState({ search });
  };

  async componentDidMount() {
    const { data: movies } = await http.get("/movies");
    const { data: genres } = await http.get("/genres");
    console.log(movies, genres);
    this.setState({ movies, genres: [{ _id: "all", name: "All" }, ...genres], isLoading: false });
  }

  render() {
    const { isLoading } = this.state;

    const { movies, genres, currentGenreID, search } = this.state;

    const currentGenreMovies =
      currentGenreID === "all"
        ? movies
        : movies.filter((movie) => movie.genre._id === currentGenreID);

    const currentSearchMovies = currentGenreMovies.filter((movie) =>
      movie.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div >
        {isLoading ? (
          <span
            className="fs-9 spinner-grow spinner-grow-sm "
            role="status"
            aria-hidden="true"
          ></span>
        ) : (
          <div className="row">
            <div className="col-2">
              <Genres
                currentGenerID={currentGenreID}
                genres={genres}
                onSelectorGenre={this.handleSelectionGenre}
              />
            </div>
            <div className="col">
              <Movies onChangeSearch={this.handleMoviesSearch} movies={currentSearchMovies} />
            </div>
          </div>
        )}
      </div>
    );
  }
}
