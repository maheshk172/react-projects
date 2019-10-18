import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeClass = { color: "orange", fontSize: "18px" };
  return (
    // <nav>
    //   <a href="/">Home</a>
    //   {"  "}|{"  "}
    //   <a href="/courses">Courses</a>
    //   {"  "}|{"  "}
    //   <a href="/about">About</a>
    // </nav>
    <>
      <NavLink to="/" exact activeStyle={activeClass}>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/courses" activeStyle={activeClass}>
        Courses
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeClass}>
        About
      </NavLink>
    </>
  );
}

export default Header;
