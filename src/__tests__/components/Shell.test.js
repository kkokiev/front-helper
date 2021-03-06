import React from 'react';
import { shallow } from 'enzyme';

import Shell from '../../components/shell/shell';
import Header from '../../ui/common/header';

describe('Shell', () => {
  const wrapper = shallow(<Shell><div /></Shell>);

  test('render', () => {
    expect(wrapper.exists()).toBe(true);
  });

  test('render MainMenu', () => {
    expect(wrapper.contains(<Header />)).toBe(true);
  });
});
