import { Component } from "react";
import Navbar from "./components/navbar/navbar";
import Movies from "./components/movies/movies";
import Genres from "./components/movies/genres";

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex", gap: "20px" }}>
          <Genres />
          <Movies />
        </div>
      </div>
    );
  }
}
