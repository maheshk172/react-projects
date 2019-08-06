import React from 'react';
import CourseForm from './CourseForm';
import { shallow } from 'enzyme';

//shallow - mounts single componenbt
//mount   - renders components with all its children

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
  return shallow(<CourseForm {...props} />);
}

it('renders form and header', () => {
  const wrapper = renderCourseForm();
  // print html generated
  //console.log(wrapper.debug());
  expect(wrapper.find('form').length).toBe(1);
  expect(wrapper.find('h2').text()).toEqual('Add Course');
});

it("label of save button is 'Save' when not saving", () => {
  const wrapper = renderCourseForm();
  expect(wrapper.find('button').text()).toEqual('Save');
});

it("label of save button is 'Saving...' when saving", () => {
  const wrapper = renderCourseForm({ saving: true });
  expect(wrapper.find('button').text()).toEqual('Saving...');
});
