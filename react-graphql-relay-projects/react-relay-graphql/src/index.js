import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { BrowserRouter as Router } from "react-router-dom";
import Relay from "react-relay";

// Using browserRouter now
// By Wrapping App by Router, we can now use Router features
render(
  <Router>
    <App limit={2} />
  </Router>,
  document.getElementById("root")
);

console.log(
  // Relay.QL`
  // query ListOfLinks{
  //   links {
  //     title
  //   }
  // }
  // `
);
