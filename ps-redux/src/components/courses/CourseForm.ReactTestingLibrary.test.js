import React from 'react';
import { cleanup, render } from 'react-testing-library';
import CourseForm from './CourseForm';

afterEach(cleanup);

function renderCourseForm(args) {
  const defaultProps = {
    authors: [],
    course: {},
    errors: {},
    onChange: () => {},
    onSave: () => {},
    saving: false
  };

  //append to default whenever new args are there
  const props = { ...defaultProps, ...args };
  return render(<CourseForm {...props} />);
}

it('Should Render Add Course Header', () => {
  // getByText has assertion built in
  const { getByText } = renderCourseForm();
  getByText('Add Course');
});

it('Should label save when not saving', () => {
  // getByText has assertion built in
  const { getByText } = renderCourseForm();
  getByText('Save');
});

it('Should label saving... when saving', () => {
  // getByText has assertion built in
  const { getByText, debug } = renderCourseForm({ saving: true });
  //debug();
  getByText('Saving...');
});
