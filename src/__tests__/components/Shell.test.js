import React from 'react';
import { shallow } from 'enzyme';

import Shell from '../../components/shell/shell';
import MainMenu from '../../components/main-menu/main-menu';

describe('Shell', () => {
  const wrapper = shallow(<Shell><div /></Shell>);

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render MainMenu', () => {
    expect(wrapper.contains(<MainMenu />)).toBe(true);
  });
});
