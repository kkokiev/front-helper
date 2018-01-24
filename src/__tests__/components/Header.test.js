import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../ui/common/header';
import MainMenu from '../../components/main-menu/main-menu';

describe('Header', () => {
  const wrapper = shallow(<Header />);

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render MainMenu', () => {
    expect(wrapper.contains(<MainMenu />)).toBe(true);
  });
});
