import ActionTypes from './ActionTypes';
import * as courseApi from '../../api/courseApi';

// export function createCourse(course) {
//   //debugger;
//   return {
//     type: ActionTypes.CREATE_COURSE,
//     course: course
//   };
// }

// Just for clarity, we can directly dispatch stuff from dispatcher
export function loadCourseSuccess(loadedCourses) {
  debugger;
  return {
    type: ActionTypes.LOAD_COURSES_SUCCES,
    courses: loadedCourses
  };
}

export function loadCourses() {
  // dispatch is injected by thunk middleware
  return function(dispatch) {
    //debugger;
    return courseApi
      .getCourses()
      .then(courses => {
        //debugger;
        dispatch(loadCourseSuccess(courses));
      })
      .catch(error => {
        console.error(error);
        // We can also dispatch error as another dispatcher call if we want
        throw error;
      });
  };
}

export function updateCourseSuccess(savedCourse) {
  return {
    type: ActionTypes.UPDATE_COURSE_SUCCESS,
    course: savedCourse
  };
}

export function createCourseSuccess(savedCourse) {
  return {
    type: ActionTypes.CREATE_COURSE_SUCCESS,
    course: savedCourse
  };
}

export function saveCourse(course) {
  return function(dispatch, getState) {
    return courseApi
      .saveCourse(course)
      .then(savedCourse => {
        course.id
          ? dispatch(updateCourseSuccess(savedCourse))
          : dispatch(createCourseSuccess(savedCourse));
      })
      .catch(error => {
        console.error('error while saving course: ' + error);
        throw error;
      });
  };
}
