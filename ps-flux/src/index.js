import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";

// Using browserRouter now
render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
