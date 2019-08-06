import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as courseActions from '../../redux/actions/courseActions';
import * as authorActions from '../../redux/actions/authorActions';
import PropTypes from 'prop-types';
import CourseForm from './CourseForm';
import { newCourse } from '../../../tools/mockData';
import Spinner from '../common/spinner/Spinner';

// Now we are exporting two things
// One without Connect and
// other with Connect - its at bottom
export function ManageCourse({
  courses,
  authors,
  loadCourses,
  loadAuthors,
  saveCourse,
  history,
  ...props // attaching all remainging stuff in props, so we can use props. again
}) {
  // lets use the destructuring at top
  // const { courses, authors, loadCourses, loadAuthors } = props;
  const [course, setCourse] = useState({ ...props.course });
  const [errors, setErrors] = useState({});
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    debugger;
    if (courses.length === 0) {
      loadCourses().catch(error => {
        alert('loading courses failed: ' + error);
      });
    } else {
      setCourse({ ...props.course });
    }

    if (authors.length === 0) {
      loadAuthors().catch(error => {
        alert('loading authors failed: ' + error);
      });
    }
    // By keeping the dependency array empty, this will only run once
    // this is same as componentDidMount method
  }, [props.course]);

  const isFormValid = () => {
    const { title, category, authorId } = course;
    const errors = {};

    if (!title) errors.title = 'Title is required !';
    if (!category) errors.category = 'Category is required !';
    if (!authorId) errors.author = 'Author is required !';

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleChange = event => {
    const { name, value } = event.target;
    // If we want stuff instant, then you can enable this too
    //isFormValid();
    setCourse(prevCourse => ({
      ...prevCourse,
      // This is named property syntax, so its its authorId then
      // [name] is [authorId], for title its [title]
      // funky :)
      [name]: name === 'authorId' ? parseInt(value, 10) : value
    }));
  };

  const handleSave = event => {
    event.preventDefault();
    // dispatch is already bind by the mapDispatchToProps
    // This returns a promise, so i can use .thne
    //saveCourse(course);
    if (!isFormValid()) return;

    setSaving(true);
    saveCourse(course)
      .then(() => {
        history.push('/courses');
      })
      .catch(error => {
        setSaving(false);
        setErrors({ onSave: error.message });
      });
  };

  return authors.length === 0 || courses.length === 0 ? (
    <Spinner />
  ) : (
    <>
      <CourseForm
        authors={authors}
        course={course}
        errors={errors}
        onChange={handleChange}
        onSave={handleSave}
        saving={saving}
      />
    </>
  );
}

// dispatch is bind automatically, I am using object here
const mapDispatchToProps = {
  loadCourses: courseActions.loadCourses,
  loadAuthors: authorActions.loadAuthors,
  saveCourse: courseActions.saveCourse
};

const getCourseBySlug = (courses, slug) => {
  return courses.find(course => course.slug === slug) || null;
};

// ownprops - component's own props
const mapStateToProps = (state, ownProps) => {
  //debugger;
  const slug = ownProps.match.params.slug;
  const _course =
    state.courses.length > 0 && slug
      ? getCourseBySlug(state.courses, slug)
      : newCourse;
  return {
    course: _course,
    courses: state.courses,
    authors: state.authors
  };
};

ManageCourse.propTypes = {
  course: newCourse,
  courses: PropTypes.array.isRequired,
  authors: PropTypes.array.isRequired,
  loadCourses: PropTypes.func.isRequired,
  loadAuthors: PropTypes.func.isRequired,
  saveCourse: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired
};

//const connectStateAndProps = connect(mapStateToProps);
const connectStateAndProps = connect(
  mapStateToProps,
  mapDispatchToProps
);

//connecting store with the component
export default connectStateAndProps(ManageCourse);
