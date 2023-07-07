import { Component } from "react";
import { Home, Login, Register } from "./pages";

export default class App extends Component {
  getPage = () => {
    switch(window.location.pathname){
      case "/login":
      return <Login />
      
      case "/register":
      return <Register />
      
      default: return <Home />
    }
  }
  
  
  render() {
    return (
      this.getPage()
    );
  }
}
