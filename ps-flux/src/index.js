import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

// Using browserRouter now
// By Wrapping App by Router, we can now use Router features
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
