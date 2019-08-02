import { EventEmitter } from "events";
import dispatcher from "../dispatcher/appDispatcher";
import actionTypes from "../actions/actionTypes";

const CHANGE_EVENT = "change";
let _courses = [];

class CourseStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getCourses() {
    console.log("getCourses: ", _courses);
    return _courses;
  }

  getCourseBySlug(slug) {
    return _courses.find(course => course.slug === slug);
  }
}

const courseStore = new CourseStore();

dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.CREATE_COURSE:
      _courses.push(action.course);
      courseStore.emitChange(); // any react components registered to this store are notified
      break;

    case actionTypes.LOAD_COURSES:
      _courses = action.courses;
      courseStore.emitChange(); // any react components registered to this store are notified
      break;

    case actionTypes.UPDATE_COURSE:
      let updatedCourse = action.course;
      _courses = _courses.map(course =>
        course.id === action.course.id ? action.course : course
      );
      courseStore.emitChange(); // any react components registered to this store are notified
      break;

    case actionTypes.DELETE_COURSE:
      //_courses = _courses.splice(course => course.id === action.courseId);
      _courses = _courses.filter(
        course => course.id !== parseInt(action.courseId, 10)
      );
      courseStore.emitChange(); // any react components registered to this store are notified
      break;
    default:
      break;
  }
});

export default courseStore;
