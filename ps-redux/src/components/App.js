import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../components/home/HomePage';
import AboutPage from '../components/about/AboutPage';
import Header from '../components/common/Header';
import PageNotFound from '../components/common/PageNotFound';
import CoursesPage from '../components/courses/CoursesPage';
// eslint-disable-next-line import/no-named-as-default
import ManageCourse from '../components/courses/ManageCourse';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <ToastContainer autoClose={3000} />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/course/:slug" component={ManageCourse} />
        <Route path="/course" component={ManageCourse} />
        <Route path="/about" component={AboutPage} />
        <Route Path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
