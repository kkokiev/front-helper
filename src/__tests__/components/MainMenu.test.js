import React from 'react';
import { shallow } from 'enzyme';
import MainMenu from '../../components/main-menu/main-menu';

describe('Shell', () => {
  const menu = shallow(<MainMenu />);

  test('render', () => {
    expect(menu.exists()).toBe(true);
  });
});
