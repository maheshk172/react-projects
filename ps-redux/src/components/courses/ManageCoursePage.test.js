// testing connected component now

import React from 'react';
import { mount } from 'enzyme';
import { newCourse, authors, courses } from '../../../tools/mockData';
import { ManageCourse } from './ManageCourse';

function renderCourseForm(args) {
  const defaultProps = {
    authors: authors,
    courses: courses,
    loadCourses: jest.fn(),
    loadAuthors: jest.fn(),
    saveCourse: jest.fn(),
    course: newCourse,
    history: {}, // in component, its injected by dom-router
    match: {} // in component, its injected by dom-router, provides access to queryParams, routeParams
  };

  //append to default whenever new args are there
  const props = { ...defaultProps, ...args };
  return mount(<ManageCourse {...props} />);
}

it('sets error when attempting to save with empty title field', () => {
  const wrapper = renderCourseForm();
  // simulate - simulates submit form action here
  wrapper.find('form').simulate('submit');
  const error = wrapper.find('.alert').first();
  expect(error.text()).toBe('Title is required !');
});
