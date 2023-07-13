import React, { Component } from "react";
import { Home, Login, Register } from "./pages";
import { Navbar } from "./components";

interface AppState {
  pathName: string;
}

export default class App extends Component<AppState> {
  state: AppState = {
    pathName: "",
  };

  getPage = () => {
    switch (window.location.pathname) {
      case "/login":
        return <Login />;

      case "/register":
        return <Register />;

      default:
        return <Home />;
    }
  };

  handleNavigate = (pathName: string) => {
    this.setState({ pathName });
  };
  render() {
    return (
      <>
        <Navbar onNavigate={this.handleNavigate} />
        {this.getPage()}
      </>
    );
  }
}
