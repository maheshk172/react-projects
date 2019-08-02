import React from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { Redirect } from 'react-router-dom';

import CourseList from './CourseList';

class CoursesPage extends React.Component {
  state = {
    redirectToAddCoursesPage: false
  };

  componentDidMount() {
    // dispositioning can remove the need of using this.props from following code
    // const {courses, authors} = this.props;

    //debugger;
    if (this.props.courses.length === 0) {
      this.props.courseActions.loadCourses().catch(error => {
        alert('loading courses failed: ' + error);
      });
    }

    if (this.props.authors.length === 0) {
      this.props.authorActions.loadAuthors().catch(error => {
        alert('loading authors failed: ' + error);
      });
    }
  }

  render() {
    return (
      <>
        {/* Instead of using Link, we have used redirect mechanism to redirect user to /course */}
        {this.state.redirectToAddCoursesPage && <Redirect to="/course" />}
        <h2> Courses </h2>
        <button
          style={{ marginBottom: '20px' }}
          className="btn btn-primary add-course"
          onClick={() => this.setState({ redirectToAddCoursesPage: true })}
        >
          Add Course
        </button>

        <CourseList courses={this.props.courses} />
      </>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // all actions from courseActions is mapped to the props
    courseActions: bindActionCreators(courseActions, dispatch),
    authorActions: bindActionCreators(authorActions, dispatch)
  };
};

// ownprops - component's own props
const mapStateToProps = state => {
  //debugger;
  return {
    courses:
      state.authors.length === 0
        ? []
        : state.courses.map(course => {
            return {
              ...course,
              authorName: state.authors.find(a => a.id === course.authorId).name
            };
          }),
    authors: state.authors
  };
};

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  courseActions: PropTypes.object.isRequired,
  authorActions: PropTypes.object.isRequired
};

//const connectStateAndProps = connect(mapStateToProps);
const connectStateAndProps = connect(
  mapStateToProps,
  mapDispatchToProps
);

//connecting store with the component
export default connectStateAndProps(CoursesPage);
