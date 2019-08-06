import * as courseActions from './courseActions';
import * as ActionTypes from './ActionTypes';
import { courses } from '../../../tools/mockData';

// below items needed to mock thunk and http calls
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import configureMockStore from 'redux-mock-store';

//configrue mock store
const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('async actions', () => {
  afterEach(() => {
    // resutoring mock after every test
    mockStore.restore();
  });

  describe('Load Courses Thunk', () => {
    it('should create BEGIN_API_CALL and LOAD_COURSES_SUCCESS when loading courses', () => {
      fetchMock.mock('*', {
        body: courses,
        headers: { 'content-type': 'application/json' }
      });

      const expectedActions = [
        { type: ActionTypes.BEGIN_API_CALL },
        { type: ActionTypes.LOAD_AUTHORS_SUCCESS, courses }
      ];

      const store = mockStore({ courses: [] });
      return store.dispatch(courseActions.loadCourses()).then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
    });
  });
});

// describe is a testn-suite
describe('createCourseSuccess', () => {
  it('should create CRETAE_COURSE_SUCCESS action', () => {
    //arrange
    const course = courses[0];
    const expectedAction = {
      type: ActionTypes.CREATE_COURSE_SUCCESS,
      course: course
    };

    //act
    const action = courseActions.createCourseSuccess(course);

    //assert
    expect(action).toEqual(expectedAction);
  });
});
