import React from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import Header from "./common/Header";
import CoursesPage from "./courses/CoursesPage";
import { Route, Switch, Redirect } from "react-router-dom";
import PageNotFound from "./common/PageNotFound";
import ManageCoursePage from "./courses/manage-courses/ManageCoursePage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  // This will be replaced by Router Routes
  // function getPage() {
  //   const route = window.location.pathname;
  //   switch (route) {
  //     case "/about":
  //       return <AboutPage />;
  //     case "/courses":
  //       return <CoursesPage />;
  //     case "/":
  //     default:
  //       return <HomePage />;
  //   }
  // }

  return (
    <div className="container-fluid">
      <ToastContainer autoClose={3000} hideProgressBar={true} />
      <Header />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/courses" component={CoursesPage} />
        <Route path="/about" component={AboutPage} />
        {/* Edit Course */}
        <Route path="/course/:slug" component={ManageCoursePage} />
        {/* create course */}
        <Route path="/course/" component={ManageCoursePage} />
        <Redirect from="/about-page" to="/about" />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
