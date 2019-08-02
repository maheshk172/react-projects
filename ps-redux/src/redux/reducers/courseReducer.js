import ActionTypes from '../actions/ActionTypes';
import initialState from './initialState';

// default state = []
export default function courseReducer(state = initialState.courses, action) {
  switch (action.type) {
    case ActionTypes.CREATE_COURSE_SUCCESS:
      //debugger;
      //Created new state by cloning existing statewith action.course added
      return [...state, { ...action.course }];

    case ActionTypes.LOAD_COURSES_SUCCES:
      //debugger;
      return action.courses;

    case ActionTypes.UPDATE_COURSE_SUCCESS:
      return state.map(course =>
        course.id === action.course.id ? action.course : course
      );

    default:
      return state;
  }
}
