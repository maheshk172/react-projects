import React from 'react';
import CourseForm from './CourseForm';
import renderer from 'react-test-renderer'; /// This will generate tree
import { courses, authors } from '../../../tools/mockData';

it("Sets sumbit button to 'saving' when saving is true", () => {
  const tree = renderer.create(
    <CourseForm
      authors={authors}
      course={courses[0]}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saving
    />
  );

  expect(tree).toMatchSnapshot();
});

it("Sets sumbit button to 'save' when saving is false", () => {
  const tree = renderer.create(
    <CourseForm
      authors={authors}
      course={courses[0]}
      onChange={jest.fn()}
      onSave={jest.fn()}
      saving={false}
    />
  );

  expect(tree).toMatchSnapshot();
});
