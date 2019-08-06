import React from 'react';
import Header from './Header';

import { mount, shallow } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

//Shallow render test
it('contains 3 navlinks via shallow', () => {
  const shallowWrapper = shallow(<Header />);
  // NavLinK is react component, shallow didnt rendered component,
  // so its searchable in shallow
  const numLinks = shallowWrapper.find('NavLink').length;
  expect(numLinks).toBe(3);
});

it('contains 3 navlinks via Mount', () => {
  const mountWrapper = mount(
    <MemoryRouter>
      <Header />
    </MemoryRouter>
  );
  const numLinks = mountWrapper.find('a').length;
  expect(numLinks).toBe(3);
});
