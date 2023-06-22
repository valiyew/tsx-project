import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
    <p className="by-writed">This is project writed by Davron Ali in React Library</p>
  </React.StrictMode>
);
