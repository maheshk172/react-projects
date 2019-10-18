import dispatcher from "../dispatcher/appDispatcher";
import * as courseApi from "../api/courseApi";
import actionTypes from "./actionTypes";

export function saveCourse(course) {
  return courseApi.saveCourse(course).then(savedCourse => {
    // Just tell all the stores that a course has just been created
    dispatcher.dispatch({
      //actionType: actionTypes.CREATE_COURSE,
      actionType: course.id
        ? actionTypes.UPDATE_COURSE
        : actionTypes.CREATE_COURSE,
      course: savedCourse
    });
  });
}

export function deleteCourse(courseId) {
  return courseApi.deleteCourse(courseId).then(() => {
    // Just tell all the stores that a course has just been created
    dispatcher.dispatch({
      //actionType: actionTypes.CREATE_COURSE,
      actionType: actionTypes.DELETE_COURSE,
      courseId: courseId
    });
  });
}

export function loadCourses() {
  return courseApi.getCourses().then(courses => {
    dispatcher.dispatch({
      actionType: actionTypes.LOAD_COURSES,
      courses: courses
    });
  });
}
