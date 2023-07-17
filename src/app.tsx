import React, { Component } from "react";
import { Navbar } from "./components";
import { Home, Login, Register } from "./pages";

interface AppState {
  pathname: string;
}

export default class App extends Component<{}, AppState> {
  state: AppState = {
    pathname: "/",
  };

  handleNavigate = (pathname: string) => {
    window.history.pushState({}, "", pathname);
    this.setState({ pathname });
  };
  

  getPage = () => {
    switch (this.state.pathname) {
      case "/":
        return <Home />;
      case "/login":
        return <Login />;
      case "/register":
        return <Register />;
      default:
        return <Home />;
    }
  };

  render() {
    return (
      <div>
        <Navbar onNavigate={this.handleNavigate} />
        <div className="container">{this.getPage()}</div>
      </div>
    );
  }
}
