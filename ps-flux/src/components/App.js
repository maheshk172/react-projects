import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";

function App() {
  function getPage() {
    const route = window.location.pathname;
    switch (route) {
      case "/about":
        return <AboutPage />;
      case "/courses":
        return <CoursesPage />;
      case "/":
      default:
        return <HomePage />;
    }
  }

  return (
    <div className="container-fluid">
      <Header />
      {getPage()}
    </div>
  );
}

export default App;
