import React, { Component } from "react";

interface NavbarProps {
  onNavigate: (pathname: string) => void;
}

export default class Navbar extends Component<NavbarProps> {
  render() {
    const { onNavigate } = this.props;

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
        <div className="container">
          <span className="navbar-brand" onClick={() => onNavigate("/home")}>
            Navbar
          </span>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link" aria-current="page" onClick={() => onNavigate("/login")}>
                  Login
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link" onClick={() => onNavigate("/register")}>
                  Register
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}
